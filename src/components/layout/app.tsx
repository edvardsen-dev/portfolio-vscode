"use client";

import { useState } from "react";
import Header from "./header";
import MainSidebar, { MainSidebarItem } from "./main-sidebar";

export default function App() {
  const [activeMainSidebarItem, setActiveMainSidebarItem] =
    useState<MainSidebarItem>("explorer");

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <MainSidebar
          activeMainSidebarItem={activeMainSidebarItem}
          setActiveMainSidebarItem={setActiveMainSidebarItem}
        />
      </div>
    </div>
  );
}
