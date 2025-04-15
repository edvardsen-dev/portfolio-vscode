import Loader from "@/components/loader";
import Sidebar from "@/components/sidebar";
import { ResizablePanel } from "@/components/ui/resizable";
import { getCommitSummaries } from "@/features/github/api";
import GitHistory from "@/features/github/components/git-history";
import { Suspense } from "react";

export default async function GitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const commitSummaries = await getCommitSummaries();

  return (
    <>
      <Sidebar id="git-sidebar">
        <Suspense fallback={<Loader />}>
          <GitHistory history={commitSummaries} />
        </Suspense>
      </Sidebar>
      <ResizablePanel id="git-content" order={1} defaultSize={85} minSize={20}>
        {children}
      </ResizablePanel>
    </>
  );
}
