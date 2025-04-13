import { TFile } from "@/types";
import { MainSidebarItem } from "../main-sidebar";
import Explorer from "./explorer";

interface SidebarProps {
  activeMainSidebarItem: MainSidebarItem;
  onFileSelect: (file: TFile) => void;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="border-r h-full">
      <SidebarContent {...props} />
    </div>
  );
}

function SidebarContent({ activeMainSidebarItem, onFileSelect }: SidebarProps) {
  if (activeMainSidebarItem === "explorer") {
    return <Explorer onFileSelect={onFileSelect} />;
  }
}
