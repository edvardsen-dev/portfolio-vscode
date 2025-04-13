import { ExperiencesResponse } from "./dtos";
import { mapExperienceResponseToExperience } from "./mappers";
import { Experience } from "./types";

const CMS_API_URL = process.env.CMS_BASE_PATH;
const ENDPOINT = `${CMS_API_URL}/api/collections/experiences/records`;

export async function getExperiences(): Promise<Experience[]> {
  const res = await fetch(ENDPOINT, {
    cache: "force-cache",
  });
  const data = (await res.json()) as ExperiencesResponse;

  return data.items.map(mapExperienceResponseToExperience);
}
