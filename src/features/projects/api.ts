import { ProjectsResponse } from "./dtos";
import { mapProjectsResponseToProject } from "./mappers";
import { Project } from "./types";

const CMS_BASE_PATH = process.env.NEXT_PUBLIC_CMS_BASE_PATH;
const ENDPOINT = `${CMS_BASE_PATH}/api/collections/projects/records`;

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(ENDPOINT, {
    cache: "force-cache",
  });
  const data = (await res.json()) as ProjectsResponse;

  return data.items.map(mapProjectsResponseToProject);
}
