import { TFile } from "@/types";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Newspaper, X } from "lucide-react";

export default function MarkdownRender({
  file,
  onCloseMarkdownPreview,
}: {
  file: TFile;
  onCloseMarkdownPreview: () => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="border-b flex">
        <div className="flex items-center border-x">
          <div className="flex items-center gap-2 p-2">
            <Newspaper className="size-4" />
            {file.name}
          </div>
          <button
            className="p-1 hover:bg-muted rounded-[3px]"
            onClick={onCloseMarkdownPreview}
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
      <div className="p-2">
        <MarkdownPreview
          source={file.content}
          style={{ background: "transparent" }}
        />
      </div>
    </div>
  );
}
