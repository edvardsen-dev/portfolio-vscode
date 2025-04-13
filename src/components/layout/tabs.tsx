import { TFile } from "@/types";
import { Code, Columns2, X } from "lucide-react";
import { Button } from "../ui/button";

export default function Tabs({
  activeFile,
  selectedFiles,
  showMarkdownPreview,
  onFileSelect,
  onCloseFile,
  onShowMarkdownPreview,
}: {
  activeFile: TFile | null;
  selectedFiles: TFile[];
  showMarkdownPreview: boolean;
  onFileSelect: (file: TFile) => void;
  onCloseFile: (file: TFile) => void;
  onShowMarkdownPreview: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="border-b flex flex-wrap w-full overflow-x-auto">
        {selectedFiles.map((file) => (
          <div
            key={file.name}
            className={`flex items-center border-r border-t-2 w-fit ${
              activeFile?.name === file.name
                ? "border-t-primary"
                : "border-t-muted"
            }`}
          >
            <button
              className="flex items-center gap-2 p-2"
              onClick={() => onFileSelect(file)}
            >
              <Code className="size-4" />
              {file.name}
            </button>
            <button
              className="p-1 hover:bg-muted rounded-[3px]"
              onClick={() => onCloseFile(file)}
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
      {activeFile?.extension === "md" && !showMarkdownPreview && (
        <Button variant="ghost" size="sm" onClick={onShowMarkdownPreview}>
          <Columns2 />
        </Button>
      )}
    </div>
  );
}
