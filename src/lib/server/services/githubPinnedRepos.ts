import { ClientError, GraphQLClient } from "graphql-request";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const PINNED_REPOS_QUERY = `
  query PinnedRepos($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

type PinnedReposQueryData = {
  user?: {
    pinnedItems?: {
      nodes?: Array<PinnedRepo | null | Record<string, unknown>> | null;
    } | null;
  } | null;
};

export type PinnedRepo = {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
};

export type GitHubPinnedReposResult =
  | { ok: true; projects: PinnedRepo[] }
  | { ok: false; status: number; message: string };

function isValidGitHubLogin(login: string): boolean {
  if (login.length < 1 || login.length > 39) return false;
  return /^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(login);
}

function isPinnedRepo(node: unknown): node is PinnedRepo {
  if (node === null || typeof node !== "object") return false;
  const n = node as Record<string, unknown>;
  return (
    typeof n.name === "string" &&
    typeof n.url === "string" &&
    typeof n.stargazerCount === "number" &&
    (n.description === null || typeof n.description === "string") &&
    (n.primaryLanguage === null ||
      (typeof n.primaryLanguage === "object" &&
        n.primaryLanguage !== null &&
        typeof (n.primaryLanguage as { name?: unknown }).name === "string"))
  );
}

function mapClientError(err: ClientError): GitHubPinnedReposResult {
  const { status, errors } = err.response;
  const gqlMsg = errors?.map((e) => e.message).join("; ");
  const message = gqlMsg || err.message || "GitHub request failed";
  const hasGqlErrors = (errors?.length ?? 0) > 0;
  const outStatus = hasGqlErrors && status >= 200 && status < 300 ? 502 : status;
  return { ok: false, status: outStatus, message };
}

export async function getGitHubPinnedRepos(): Promise<GitHubPinnedReposResult> {
  const token = process.env.GITHUB_TOKEN?.trim();
  const login = process.env.GITHUB_LOGIN?.trim();

  if (!token || token === "your-token-here") {
    return {
      ok: false,
      status: 503,
      message: "Missing or placeholder GITHUB_TOKEN",
    };
  }

  if (!login) {
    return {
      ok: false,
      status: 503,
      message: "Missing GITHUB_LOGIN",
    };
  }

  if (!isValidGitHubLogin(login)) {
    return {
      ok: false,
      status: 400,
      message: "Invalid GITHUB_LOGIN",
    };
  }

  const client = new GraphQLClient(GITHUB_GRAPHQL_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  try {
    const data = await client.request<PinnedReposQueryData>(PINNED_REPOS_QUERY, { login });
    const nodes = data.user?.pinnedItems?.nodes ?? [];
    const projects = nodes.filter(isPinnedRepo);
    return { ok: true, projects };
  } catch (err: unknown) {
    if (err instanceof ClientError) {
      return mapClientError(err);
    }
    return {
      ok: false,
      status: 502,
      message: "Failed to reach GitHub",
    };
  }
}
