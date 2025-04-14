"use client";

import { useState } from "react";
import Header from "./header";
import { Project } from "@/features/projects/types";
import { Experience } from "@/features/experiences/types";
import { Education } from "@/features/educations/types";
import DataProvider from "@/context/data-context";
import MainSidebar, { MainSidebarItem } from "./main-sidebar";
import { ResizablePanelGroup } from "./ui/resizable";
import Explorer from "./explorer";
import Git from "./git";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AppProps {
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
}

const queryClient = new QueryClient();

export default function App({ projects, experiences, educations }: AppProps) {
  const [activeMainSidebarItem, setActiveMainSidebarItem] =
    useState<MainSidebarItem>("explorer");

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider data={{ projects, experiences, educations }}>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex" style={{ height: "calc(100vh - 33px)" }}>
            <MainSidebar
              activeMainSidebarItem={activeMainSidebarItem}
              setActiveMainSidebarItem={setActiveMainSidebarItem}
            />
            <ResizablePanelGroup direction="horizontal">
              {activeMainSidebarItem === "explorer" && <Explorer />}
              {activeMainSidebarItem === "git" && <Git />}
            </ResizablePanelGroup>
          </div>
        </div>
      </DataProvider>
    </QueryClientProvider>
  );
}
