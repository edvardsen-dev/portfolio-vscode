export type CommitResponse = {
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
