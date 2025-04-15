import { CommitResponse, CommitSummaryResponse } from "./dtos";
import { Commit, CommitSummary } from "./types";

export function mapToCommitSummary(res: CommitSummaryResponse): CommitSummary {
  return {
    date: new Date(res.commit.author.date),
    message: res.commit.message,
    sha: res.sha,
    author: {
      name: res.commit.author.name,
      email: res.commit.author.email,
      login: res.author.login,
      avatar: res.author.avatar_url,
    },
  };
}

export function mapToCommit(res: CommitResponse): Commit {
  return {
    date: new Date(res.commit.author.date),
    message: res.commit.message,
    sha: res.sha,
    author: {
      name: res.commit.author.name,
      email: res.commit.author.email,
      login: res.author.login,
      avatar: res.author.avatar_url,
    },
    files: res.files.map((file) => ({
      sha: file.sha,
      status: file.status,
      filename: file.filename,
      additions: file.additions,
      changes: file.changes,
      deletions: file.deletions,
      patch: file.patch,
    })),
  };
}
