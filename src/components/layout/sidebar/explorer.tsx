import { useData } from "@/context/data-context";
import { ChevronRight, File, Folder } from "lucide-react";
import { useState } from "react";

export type Item = {
  name: string;
  icon?: string;
  content?: string;
};

type FileTreeItem = {
  item: Item;
  children?: FileTreeItem[];
};

export default function Explorer({
  onFileSelect,
}: {
  onFileSelect: (file: Item) => void;
}) {
  const { projects, experiences, educations } = useData();
  const content = [
    {
      item: { name: ".gitignore", content: "/node_modules" },
    },
    {
      item: { name: "README.md", content: "# Hello World" },
    },
    {
      item: { name: "projects" },
      children: projects.map((project) => ({
        item: { name: project.title, content: project.description },
      })),
    },
    {
      item: { name: "experiences" },
      children: experiences.map((experience) => ({
        item: {
          name: experience.company.name,
          icon: experience.company.logo,
          content: experience.description,
        },
      })),
    },
    {
      item: { name: "educations" },
      children: educations.map((education) => ({
        item: {
          name: education.title,
          content: education.description,
        },
      })),
    },
  ];

  return (
    <div className="text-sm px-2 relative">
      {content.map((entry) => (
        <ExplorerItem
          onFileSelect={onFileSelect}
          key={entry.item.name}
          entry={entry}
        />
      ))}
    </div>
  );
}

function ExplorerItem({
  entry,
  onFileSelect,
}: {
  entry: FileTreeItem;
  onFileSelect: (file: Item) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  function handleSelect() {
    if (entry.children) {
      setExpanded((prev) => !prev);
    } else {
      onFileSelect(entry.item);
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
            entry.children ? "" : "opacity-0"
          } ${expanded ? "rotate-90" : ""}`}
        />
        {entry.children ? (
          <Folder className="size-4 ml-1" />
        ) : entry.item.icon ? (
          <img src={entry.item.icon} />
        ) : (
          <File className="size-4" />
        )}
        <p className="ml-2 truncate">{entry.item.name}</p>
      </button>
      {expanded && entry.children && (
        <div className="ml-2 border-l">
          {entry.children.map((child) => (
            <ExplorerItem
              key={child.item.name}
              entry={child}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
