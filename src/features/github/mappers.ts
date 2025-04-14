import { CommitResponse } from "./dtos";
import { Commit } from "./types";

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
  };
}
