import Loader from "@/components/loader";
import { getCommit } from "@/features/github/api";
import CommitDetails from "@/features/github/components/commit-details";
import { Suspense } from "react";

export default async function GitPage({ params }: { params: { sha: string } }) {
  const { sha } = await params;
  const commit = await getCommit(sha);

  return (
    <Suspense fallback={<Loader />}>
      <CommitDetails commit={commit} />
    </Suspense>
  );
}
