export type CommitSummary = {
  date: Date;
  message: string;
  sha: string;
  author: {
    name: string;
    email: string;
    login: string;
    avatar: string;
  };
};

export type Commit = CommitSummary & {
  files: {
    sha: string;
    status: string;
    filename: string;
    additions: number;
    changes: number;
    deletions: number;
    patch: string;
  }[];
};
