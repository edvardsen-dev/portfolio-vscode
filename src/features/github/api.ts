import { l } from "@/utils";
import { CommitResponse, CommitSummaryResponse } from "./dtos";
import { mapToCommit, mapToCommitSummary } from "./mappers";
import { Commit, CommitSummary } from "./types";

const ENDPOINT = "https://api.github.com";

export async function getCommitSummaries(): Promise<CommitSummary[]> {
  const res = await fetch(
    `${ENDPOINT}/repos/edvardsen-dev/portfolio-vscode/commits`
  );

  if (!res.ok) {
    l({
      type: "error",
      file: "GitHub / API",
      func: "getCommits",
      message: "Failed to fetch commits",
      obj: await res.json(),
    });
    throw new Error("Failed to fetch commits");
  }

  const data = (await res.json()) as CommitSummaryResponse[];

  return data.map(mapToCommitSummary);
}

export async function getCommit(sha: string): Promise<Commit> {
  const res = await fetch(
    `${ENDPOINT}/repos/edvardsen-dev/portfolio-vscode/commits/${sha}`
  );
  const data = (await res.json()) as CommitResponse;

  l({
    type: "info",
    file: "GitHub / API",
    func: "getCommit",
    message: "Fetched commit",
    obj: data,
  });

  return mapToCommit(data);
}
