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

type GraphQLError = { message: string };

type GraphQLResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<
          | PinnedRepo
          | null
          | Record<string, unknown>
        >;
      } | null;
    } | null;
  };
  errors?: GraphQLError[];
  message?: string;
};

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

  let res: Response;
  try {
    res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PINNED_REPOS_QUERY,
        variables: { login },
      }),
    });
  } catch {
    return {
      ok: false,
      status: 502,
      message: "Failed to reach GitHub",
    };
  }

  let body: GraphQLResponse;
  try {
    body = (await res.json()) as GraphQLResponse;
  } catch {
    return {
      ok: false,
      status: 502,
      message: "Invalid response from GitHub",
    };
  }

  if (!res.ok) {
    const msg =
      typeof body.message === "string" ? body.message : res.statusText || "GitHub request failed";
    return { ok: false, status: res.status, message: msg };
  }

  if (body.errors?.length) {
    const msg = body.errors.map((e) => e.message).join("; ");
    return { ok: false, status: 502, message: msg };
  }

  const nodes = body.data?.user?.pinnedItems?.nodes ?? [];
  const projects = nodes.filter(isPinnedRepo);

  return { ok: true, projects };
}
