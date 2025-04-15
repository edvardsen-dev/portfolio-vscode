import { getProjects } from "@/features/projects/api";
import { getExperiences } from "@/features/experiences/api";
import { getEducations } from "@/features/educations/api";
import Explorer from "@/components/explorer";
import { Suspense } from "react";
import Loader from "@/components/loader";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [projects, experiences, educations] = await Promise.all([
    getProjects(),
    getExperiences(),
    getEducations(),
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <Explorer
        projects={projects}
        experiences={experiences}
        educations={educations}
      />
    </Suspense>
  );
}
