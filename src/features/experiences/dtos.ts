import { ListResponse } from "@/dtos";

export type ExperienceResponse = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
  title: string;
  location: string;
  start: string;
  end: string;
  technologies: string[] | null;
  description: string;
  company_name: string;
  company_logo: string;
  company_link: string;
  company_color: string;
};

export type ExperiencesResponse = ListResponse & {
  items: ExperienceResponse[];
};
