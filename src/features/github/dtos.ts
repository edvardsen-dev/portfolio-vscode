export type CommitSummaryResponse = {
  author: {
    login: string;
    avatar_url: string;
  };
  commit: {
    author: {
      date: string;
      name: string;
      email: string;
    };
    message: string;
  };
  sha: string;
};

export type CommitResponse = CommitSummaryResponse & {
  files: {
    additions: number;
    blob_url: string;
    changes: number;
    contents_url: string;
    deletions: number;
    filename: string;
    patch: string;
    raw_url: string;
    sha: string;
    status: string;
  }[];
};
