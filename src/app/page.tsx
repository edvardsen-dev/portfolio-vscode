import App from "@/components/layout/app";
import { getProjects } from "@/features/projects/api";
import { getExperiences } from "@/features/experiences/api";
import { getEducations } from "@/features/educations/api";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const [projects, experiences, educations] = await Promise.all([
    getProjects(),
    getExperiences(),
    getEducations(),
  ]);

  return (
    <App
      projects={projects}
      experiences={experiences}
      educations={educations}
    />
  );
}
