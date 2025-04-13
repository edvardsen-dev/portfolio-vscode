import { EducationsResponse } from "./dtos";
import { mapEducationsResponseToEducation } from "./mappers";
import { Education } from "./types";

const CMS_BASE_PATH = process.env.NEXT_PUBLIC_CMS_BASE_PATH;
const ENDPOINT = `${CMS_BASE_PATH}/api/collections/educations/records`;

export async function getEducations(): Promise<Education[]> {
  const res = await fetch(ENDPOINT, {
    cache: "force-cache",
  });
  const data = (await res.json()) as EducationsResponse;

  return data.items.map(mapEducationsResponseToEducation);
}
