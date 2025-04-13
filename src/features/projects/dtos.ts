import { ListResponse } from "@/dtos";
import { Contributer, Resource } from "./types";

export type ProjectResponse = {
  id: string;
  collectionId: string;
  collectionName: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  live?: string;
  meta: {
    stack: string[];
    contributers: Contributer[];
    features: string[];
    resources: Resource[];
  };
  content: {
    sections: {
      title?: string;
      text: string[];
    }[];
  };
  created: string;
  updated: string;
};

export type ProjectsResponse = ListResponse & {
  items: ProjectResponse[];
};
