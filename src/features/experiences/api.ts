import { CMS_BASE_PATH } from "@/utils";
import { ExperiencesResponse } from "./dtos";
import { mapExperienceResponseToExperience } from "./mappers";
import { Experience } from "./types";

const ENDPOINT = `${CMS_BASE_PATH}/api/collections/experiences/records`;

export async function getExperiences(): Promise<Experience[]> {
  const res = await fetch(ENDPOINT, {
    cache: "force-cache",
  });
  const data = (await res.json()) as ExperiencesResponse;

  return data.items.map(mapExperienceResponseToExperience);
}
