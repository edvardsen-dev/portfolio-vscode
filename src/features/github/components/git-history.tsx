"use client";

import { useParams } from "next/navigation";
import { CommitSummary } from "../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitCommitVertical } from "lucide-react";

export default function GitHistory({ history }: { history: CommitSummary[] }) {
  const params = useParams();
  const { sha } = params as { sha: string };

  return (
    <ul>
      {history.map((commit) => (
        <li key={commit.sha}>
          <Button
            asChild
            variant="ghost"
            className={`w-full text-left justify-start ${
              sha === commit.sha ? "bg-muted" : ""
            }`}
            size="lg"
          >
            <Link href={`/git/${commit.sha}`}>
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
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
