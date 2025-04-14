import { CommitResponse } from "./dtos";
import { mapToCommit } from "./mappers";
import { Commit } from "./types";

const ENDPOINT = "https://api.github.com";

export async function getCommits(): Promise<Commit[]> {
  const res = await fetch(
    `${ENDPOINT}/repos/edvardsen-dev/portfolio-vscode/commits`
  );
  const data = (await res.json()) as CommitResponse[];

  return data.map(mapToCommit);
}

export async function getCommit(sha: string): Promise<Commit> {
  const res = await fetch(
    `${ENDPOINT}/repos/edvardsen-dev/portfolio-vscode/commits/${sha}`
  );
  const data = (await res.json()) as CommitResponse;

  console.log(data);

  return mapToCommit(data);
}
