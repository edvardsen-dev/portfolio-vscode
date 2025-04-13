import { Code, X } from "lucide-react";
import { Item } from "./sidebar/explorer";

export default function Tabs({
  activeFile,
  selectedFiles,
  onFileSelect,
  onCloseFile,
}: {
  activeFile: Item | null;
  selectedFiles: Item[];
  onFileSelect: (file: Item) => void;
  onCloseFile: (file: Item) => void;
}) {
  return (
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
  );
}
