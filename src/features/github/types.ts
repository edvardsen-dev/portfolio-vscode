export type Commit = {
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
