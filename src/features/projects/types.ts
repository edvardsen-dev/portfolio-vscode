export type Project = {
  id: string;
  collectionId: string;
  collectionName: string;
  title: string;
  description: string;
  updatedAt: Date;
  thumbnail: string;
  images: string[];
  stack: string[];
  contributers: Contributer[];
  features: string[];
  resources: Resource[];
  live?: string;
  content: {
    title?: string;
    text: string[];
  }[];
};

export type Contributer = {
  name: string;
  href: string;
};

export type Resource = {
  label: string;
  href: string;
};
