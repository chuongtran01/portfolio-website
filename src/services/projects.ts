import { isAxiosError } from "axios";
import { apiClient } from "./apiClient";

/** Wire shape from GET /api/projects (matches GraphQL repository fields). */
export type ApiPinnedRepo = {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
};

type ProjectsSuccessResponse = {
  projects: ApiPinnedRepo[];
};

type ProjectsErrorBody = {
  error: string;
};

/** Shape expected by `GitHubProjects` (structural match). */
export type UiProject = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  techStack: string[];
  topics: string[];
};

function mapRepoToUiProject(repo: ApiPinnedRepo, index: number): UiProject {
  const techStack = repo.primaryLanguage?.name ? [repo.primaryLanguage.name] : [];
  return {
    id: index + 1,
    name: repo.name,
    description: repo.description,
    html_url: repo.url,
    techStack,
    topics: [],
  };
}

export async function fetchProjects(): Promise<UiProject[]> {
  try {
    const { data } = await apiClient.get<ProjectsSuccessResponse>("/api/projects");
    return (data.projects ?? []).map(mapRepoToUiProject);
  } catch (err: unknown) {
    if (isAxiosError(err) && err.response?.data) {
      const body = err.response.data as ProjectsErrorBody;
      if (typeof body.error === "string") {
        throw new Error(body.error);
      }
    }
    if (err instanceof Error) throw err;
    throw new Error("Failed to load projects");
  }
}
