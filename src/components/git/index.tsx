import { getCommit, getCommits } from "@/features/github/api";
import Sidebar from "../sidebar";
import { ResizablePanel } from "../ui/resizable";
import { useQuery } from "@tanstack/react-query";
import { GitCommitVertical } from "lucide-react";
import { useState } from "react";

export default function Git() {
  const [selectedCommit, setSelectedCommit] = useState<string | null>(null);

  const {
    data: commits,
    isPending,
    error,
  } = useQuery({
    queryKey: ["git"],
    queryFn: () => getCommits(),
  });

  // const { data: commit } = useQuery({
  //   queryKey: ["git", selectedCommit],
  //   queryFn: () => getCommit(selectedCommit!),
  //   enabled: !!selectedCommit,
  // });

  return (
    <>
      <Sidebar id="git-sidebar">
        <div className="p-2 text-sm">
          {isPending ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <ul className="space-y-1">
              {commits.map((commit) => (
                <li key={commit.date.toISOString()}>
                  <button
                    className="flex items-center text-left gap-2"
                    onClick={() => setSelectedCommit(commit.sha)}
                  >
                    <GitCommitVertical />
                    <div>
                      <p className="truncate">{commit.message}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs truncate">
                        <img
                          src={commit.author.avatar}
                          alt={commit.author.login}
                          className="size-4 rounded-full"
                        />
                        <p>{commit.author.login}</p>
                        <p>
                          {commit.date.toLocaleDateString("no-NB", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Sidebar>
      <ResizablePanel id="git-content" order={1} defaultSize={85} minSize={20}>
        <div className="p-4">
          <p className="text-muted-foreground">Comming soon...</p>
        </div>
      </ResizablePanel>
    </>
  );
}
