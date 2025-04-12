"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import MainSidebar, { MainSidebarItem } from "./main-sidebar";
import Sidebar from "./sidebar";
import { Item } from "./sidebar/explorer";
import Tabs from "./tabs";
import Code from "./code";

export default function App() {
  const [activeMainSidebarItem, setActiveMainSidebarItem] =
    useState<MainSidebarItem>("explorer");
  const [selectedFiles, setSelectedFiles] = useState<Item[]>([]);
  const [activeFile, setActiveFile] = useState<Item | null>(null);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  useEffect(() => {
    console.log(activeFile);
  }, [activeFile]);

  function handleSelectFile(file: Item) {
    setActiveFile(file);

    const found = selectedFiles.find((f) => f.name === file.name);
    if (found) return;

    setSelectedFiles((prev) => [...prev, file]);
  }

  function handleCloseFile(file: Item) {
    setSelectedFiles((prev) => {
      if (prev.length === 1) {
        setActiveFile(null);
      }
      return prev.filter((f) => f.name !== file.name);
    });
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
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
            onFileSelect={(file: Item) => setActiveFile(file)}
            onCloseFile={handleCloseFile}
          />
          <Code file={activeFile} />
        </div>
      </div>
    </div>
  );
}
