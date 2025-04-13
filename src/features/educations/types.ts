export type Education = {
  title: string;
  date: {
    start: Date | null;
    end: Date | null;
  };
  location: string;
  description: string;
};
