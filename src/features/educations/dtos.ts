import { ListResponse } from "@/dtos";

export type EducationResponse = {
  id: string;
  collectionId: string;
  collectionName: string;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
};

export type EducationsResponse = ListResponse & {
  items: EducationResponse[];
};
