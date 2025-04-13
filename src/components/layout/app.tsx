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
import MarkdownRender from "./markdown-render";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";

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
  const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);

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
        setActiveFile(filteredFiles[filteredFiles.length - 1]);
      }
      return filteredFiles;
    });
    if (file.name === activeFile?.name) {
      setShowMarkdownPreview(false);
    }
  }

  return (
    <DataProvider data={{ projects, experiences, educations }}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex h-full">
          <MainSidebar
            activeMainSidebarItem={activeMainSidebarItem}
            setActiveMainSidebarItem={setActiveMainSidebarItem}
          />
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={15} minSize={8}>
              <Sidebar
                activeMainSidebarItem={activeMainSidebarItem}
                onFileSelect={handleSelectFile}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={20}>
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
                <ResizablePanel minSize={20}>
                  <MarkdownRender
                    file={activeFile}
                    onCloseMarkdownPreview={() => setShowMarkdownPreview(false)}
                  />
                </ResizablePanel>
              </>
            )}
          </ResizablePanelGroup>
        </div>
      </div>
    </DataProvider>
  );
}
