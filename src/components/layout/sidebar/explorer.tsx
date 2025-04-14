import { about } from "@/content/about";
import { useData } from "@/context/data-context";
import { convertEducationToFileTreeItem } from "@/features/educations/utils";
import { convertExperienceToFileTreeItem } from "@/features/experiences/utils";
import { convertProjectToFileTreeItem } from "@/features/projects/utils";
import { FileTreeItem, TFile } from "@/types";
import { isFolder } from "@/utils";
import { ChevronRight, File, Folder } from "lucide-react";
import { useState } from "react";

export default function Explorer({
  onFileSelect,
}: {
  onFileSelect: (file: TFile) => void;
}) {
  const { projects, experiences, educations } = useData();
  const content: FileTreeItem[] = [
    {
      type: "file",
      name: ".gitignore",
      extension: "gitignore",
      icon: "/icons/git.svg",
      content: "/node_modules",
    },
    {
      type: "file",
      name: "README.md",
      extension: "md",
      icon: "/icons/readme.svg",
      content: about,
    },
    {
      type: "folder",
      name: "projects",
      icon: "/icons/folder-project.svg",
      children: projects.map(convertProjectToFileTreeItem),
    },
    {
      type: "folder",
      name: "experiences",
      icon: "/icons/folder-experience.svg",
      children: experiences.map(convertExperienceToFileTreeItem),
    },
    {
      type: "folder",
      name: "educations",
      icon: "/icons/folder-education.svg",
      children: educations.map(convertEducationToFileTreeItem),
    },
  ];

  return (
    <div className="text-sm px-2 relative">
      {content.map((entry) => (
        <ExplorerItem
          onFileSelect={onFileSelect}
          key={entry.name}
          item={entry}
        />
      ))}
    </div>
  );
}

function ExplorerItem({
  item,
  onFileSelect,
}: {
  item: FileTreeItem;
  onFileSelect: (file: TFile) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  function handleSelect() {
    if (isFolder(item)) {
      setExpanded((prev) => !prev);
    } else {
      onFileSelect(item);
    }
  }

  return (
    <div>
      <button
        className="flex items-center w-full py-0.5 group"
        onClick={handleSelect}
      >
        <div className="absolute h-6 w-full left-0 group-hover:bg-muted -z-10 pointer-events-none" />
        <ChevronRight
          className={`size-4 transition-transform ${
            isFolder(item) ? "" : "opacity-0"
          } ${expanded ? "rotate-90" : ""}`}
        />
        {item.icon ? (
          <img src={item.icon} alt={item.name} className="h-4" />
        ) : isFolder(item) ? (
          <Folder className="size-4" />
        ) : (
          <File className="size-4" />
        )}
        <p className="ml-2 truncate">{item.name}</p>
      </button>
      {expanded && isFolder(item) && (
        <div className="ml-2 border-l">
          {item.children.map((child) => (
            <ExplorerItem
              key={child.name}
              item={child}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
