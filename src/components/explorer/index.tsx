"use client";

import { useState } from "react";
import { ResizableHandle, ResizablePanel } from "../ui/resizable";
import Code from "./code";
import MarkdownRender from "./markdown-render";
import Tabs from "./tabs";
import { FileTreeItem, TFile } from "@/types";
import Sidebar from "../sidebar";
import { about } from "@/content/about";
import { convertProjectToFileTreeItem } from "@/features/projects/utils";
import { convertExperienceToFileTreeItem } from "@/features/experiences/utils";
import { convertEducationToFileTreeItem } from "@/features/educations/utils";
import { ChevronRight, Folder, File } from "lucide-react";
import { isFolder } from "@/utils";
import { Project } from "@/features/projects/types";
import { Experience } from "@/features/experiences/types";
import { Education } from "@/features/educations/types";

export default function Explorer({
  projects,
  experiences,
  educations,
}: {
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
}) {
  const [selectedFiles, setSelectedFiles] = useState<TFile[]>([]);
  const [activeFile, setActiveFile] = useState<TFile | null>(null);
  const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);

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

  function handleSelectFile(file: TFile) {
    setActiveFile(file);

    const found = selectedFiles.find((f) => f.name === file.name);
    if (found) return;

    setSelectedFiles((prev) => [...prev, file]);
  }

  function handleCloseFile(file: TFile) {
    setSelectedFiles((prev) => {
      const filteredFiles = prev.filter((f) => f.name !== file.name);
      if (filteredFiles.length === 0) {
        setActiveFile(null);
      } else {
        const newActiveFile = filteredFiles[filteredFiles.length - 1];
        setActiveFile(newActiveFile);
      }
      return filteredFiles;
    });
  }

  return (
    <>
      <Sidebar id="explorer-sidebar">
        <div className="text-sm px-2 relative">
          {content.map((entry) => (
            <ExplorerItem
              onFileSelect={handleSelectFile}
              key={entry.name}
              item={entry}
            />
          ))}
        </div>
      </Sidebar>
      <ResizablePanel
        id="explorer-code"
        order={1}
        defaultSize={85}
        minSize={20}
      >
        <div className="flex flex-col h-full">
          <Tabs
            activeFile={activeFile}
            selectedFiles={selectedFiles}
            showMarkdownPreview={showMarkdownPreview}
            onFileSelect={(file: TFile) => setActiveFile(file)}
            onCloseFile={handleCloseFile}
            onShowMarkdownPreview={() => setShowMarkdownPreview(true)}
          />
          <Code file={activeFile} />
        </div>
      </ResizablePanel>
      {showMarkdownPreview && activeFile?.extension === "md" && (
        <>
          <ResizableHandle />
          <ResizablePanel
            id="explorer-preview"
            order={2}
            defaultSize={40}
            minSize={20}
          >
            <MarkdownRender
              file={activeFile}
              onCloseMarkdownPreview={() => setShowMarkdownPreview(false)}
            />
          </ResizablePanel>
        </>
      )}
    </>
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
