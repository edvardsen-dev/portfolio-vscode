"use client";

import { useState } from "react";
import Header from "./header";
import MainSidebar, { MainSidebarItem } from "./main-sidebar";
import Sidebar from "./sidebar";
import Tabs from "./tabs";
import { Project } from "@/features/projects/types";
import { Experience } from "@/features/experiences/types";
import { Education } from "@/features/educations/types";
import DataProvider from "@/context/data-context";
import { TFile } from "@/types";
import Code from "./code";

interface AppProps {
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
}

export default function App({ projects, experiences, educations }: AppProps) {
  const [activeMainSidebarItem, setActiveMainSidebarItem] =
    useState<MainSidebarItem>("explorer");
  const [selectedFiles, setSelectedFiles] = useState<TFile[]>([]);
  const [activeFile, setActiveFile] = useState<TFile | null>(null);

  function handleSelectFile(file: TFile) {
    setActiveFile(file);

    const found = selectedFiles.find((f) => f.name === file.name);
    if (found) return;

    setSelectedFiles((prev) => [...prev, file]);
  }

  function handleCloseFile(file: TFile) {
    setSelectedFiles((prev) => {
      if (prev.length === 1) {
        setActiveFile(null);
      }
      return prev.filter((f) => f.name !== file.name);
    });
  }

  return (
    <DataProvider data={{ projects, experiences, educations }}>
      <div className="flex flex-col h-screen">
        <Header />
        <div
          className="grid h-full"
          style={{ gridTemplateColumns: "auto 300px 1fr" }}
        >
          <MainSidebar
            activeMainSidebarItem={activeMainSidebarItem}
            setActiveMainSidebarItem={setActiveMainSidebarItem}
          />
          <Sidebar
            activeMainSidebarItem={activeMainSidebarItem}
            onFileSelect={handleSelectFile}
          />
          <div className="flex-grow flex flex-col">
            <Tabs
              activeFile={activeFile}
              selectedFiles={selectedFiles}
              onFileSelect={(file: TFile) => setActiveFile(file)}
              onCloseFile={handleCloseFile}
            />
            <Code file={activeFile} />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}
