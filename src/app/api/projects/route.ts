import { getGitHubPinnedRepos } from "@/lib/server/services/githubPinnedRepos";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getGitHubPinnedRepos();

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: result.status });
  }

  return NextResponse.json({ projects: result.projects });
}
