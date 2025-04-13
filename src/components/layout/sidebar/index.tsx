import { MainSidebarItem } from "../main-sidebar";
import Explorer, { Item } from "./explorer";

interface SidebarProps {
  activeMainSidebarItem: MainSidebarItem;
  onFileSelect: (file: Item) => void;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="border-r">
      <SidebarContent {...props} />
    </div>
  );
}

function SidebarContent({ activeMainSidebarItem, onFileSelect }: SidebarProps) {
  if (activeMainSidebarItem === "explorer") {
    return <Explorer onFileSelect={onFileSelect} />;
  }
}
