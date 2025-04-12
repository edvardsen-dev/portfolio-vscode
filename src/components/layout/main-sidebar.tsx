import {
  BugPlay,
  CircleUser,
  File,
  GitBranch,
  LayoutGrid,
  Search,
  Settings,
  User,
} from "lucide-react";
import { Button } from "../ui/button";

const topIcons = [
  {
    id: "explorer",
    icon: <File />,
  },
  {
    id: "search",
    icon: <Search />,
  },
  {
    id: "git",
    icon: <GitBranch />,
  },
  {
    id: "issues",
    icon: <BugPlay />,
  },
  {
    id: "extensions",
    icon: <LayoutGrid />,
  },
] as const;

const bottomIcons = [<CircleUser />, <Settings />];

export type MainSidebarItem = (typeof topIcons)[number]["id"];

export default function MainSidebar({
  activeMainSidebarItem,
  setActiveMainSidebarItem,
}: {
  activeMainSidebarItem: MainSidebarItem;
  setActiveMainSidebarItem: (item: MainSidebarItem) => void;
}) {
  return (
    <div className="flex flex-col justify-between border-r">
      <ul>
        {topIcons.map((item) => (
          <li
            key={item.id}
            className={
              activeMainSidebarItem === item.id
                ? "border-l-2 border-primary"
                : ""
            }
            onClick={() => setActiveMainSidebarItem(item.id)}
          >
            <Button variant="ghost" size="lg">
              {item.icon}
            </Button>
          </li>
        ))}
      </ul>
      <ul>
        {bottomIcons.map((item, index) => (
          <li key={index}>
            <Button variant="ghost" size="lg">
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
