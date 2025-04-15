"use client";

import { useEffect, useState } from "react";

type DiffLine = {
  type: "added" | "removed";
  content: string;
};

export default function DiffDisplay({ patch }: { patch: string }) {
  const [diffLines, setDiffLines] = useState<DiffLine[]>([]);

  useEffect(() => {
    if (!patch) return;

    const parsedLines: DiffLine[] = [];
    const lines = patch.split("\n");

    lines.forEach((line) => {
      if (line.startsWith("- ") && !line.startsWith("--- ")) {
        parsedLines.push({ type: "removed", content: line.substring(2) });
      } else if (line.startsWith("+ ") && !line.startsWith("+++ ")) {
        parsedLines.push({ type: "added", content: line.substring(2) });
      }
    });

    console.log(lines);

    setDiffLines(parsedLines);
  }, []);

  return (
    <div className="whitespace-pre-wrap text-sm font-mono">
      {diffLines.length === 0 ? (
        <div className="flex flex-col items-center gap-1 py-8">
          <h4 className="text-blue-400 font-semibold">Load Diff</h4>
          <p className="text-xs text-muted-foreground">No diff to show</p>
        </div>
      ) : (
        diffLines.map((line, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                line.type === "removed"
                  ? "rgba(255, 100, 100, 0.2)"
                  : line.type === "added"
                  ? "rgba(100, 255, 100, 0.2)"
                  : "transparent",
            }}
            className="p-1"
          >
            +{line.content}
          </div>
        ))
      )}
    </div>
  );
}
