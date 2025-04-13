import { ExperienceResponse } from "./dtos";
import { Experience } from "./types";

export function mapExperienceResponseToExperience(
  res: ExperienceResponse
): Experience {
  return {
    title: res.title,
    description: res.description,
    location: res.location,
    technologies: res.technologies ?? undefined,
    company: {
      name: res.company_name,
      logo: res.company_logo ? undefined : res.company_logo,
      href: res.compaony_link ? undefined : res.compaony_link,
      bg: res.company_color ? undefined : res.company_color,
    },
    date: {
      start: new Date(res.start),
      end: res.end ? new Date(res.end) : null,
    },
  };
}
