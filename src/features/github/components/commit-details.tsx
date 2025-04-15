"use client";

import { Button } from "@/components/ui/button";
import { Commit } from "../types";
import DiffDisplay from "./diff-display";
import { useState } from "react";
import { ChevronDown, Dot } from "lucide-react";

export default function CommitDetails({ commit }: { commit: Commit }) {
  return (
    <div className="h-full overflow-auto mx-auto p-4 space-y-4">
      <div>
        <div className="flex items-center gap-2 text-sm mb-4">
          <img
            src={commit.author.avatar}
            alt={commit.author.login}
            className="size-8 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <p>{commit.author.login}</p>
              <span className="text-muted-foreground">
                <Dot className="size-4" />
              </span>
              <p className="text-muted-foreground">
                {commit.date.toLocaleDateString("no-NB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <p className="text-muted-foreground">{commit.message}</p>
          </div>
        </div>
        <h2 className="font-bold">{commit.files.length} files changed</h2>
      </div>
      {commit.files.map((file) => (
        <FileDisplay key={file.filename} file={file} />
      ))}
    </div>
  );
}

function FileDisplay({ file }: { file: Commit["files"][0] }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border rounded-[5px]">
      <Button
        variant="ghost"
        className="flex items-center justify-between w-full border-b p-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <ChevronDown
            className={`${open ? "" : "-rotate-90"} transition-transform`}
          />
          <h3>{file.filename}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {file.additions > 0 && (
            <p className="text-green-400">+ {file.additions}</p>
          )}
          {file.deletions > 0 && (
            <p className="text-red-400">+ {file.deletions}</p>
          )}
        </div>
      </Button>
      {open && <DiffDisplay patch={file.patch} />}
    </div>
  );
}
