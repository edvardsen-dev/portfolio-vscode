import {
  BugPlay,
  CircleUser,
  File,
  GitBranch,
  LayoutGrid,
  Search,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const topIcons = [
  {
    name: "Explorer",
    href: "/",
    icon: <File />,
  },
  {
    name: "Search",
    href: "/search",
    icon: <Search />,
  },
  {
    name: "Git",
    href: "/git",
    icon: <GitBranch />,
  },
  {
    name: "Issues",
    href: "/issues",
    icon: <BugPlay />,
  },
  {
    name: "Extensions",
    href: "/extensions",
    icon: <LayoutGrid />,
  },
] as const;

const bottomIcons = [<CircleUser />, <Settings />];

export default function MainSidebar() {
  return (
    <div className="flex flex-col justify-between border-r">
      <ul>
        {topIcons.map((item) => (
          <li key={item.name}>
            <Button asChild variant="ghost" size="lg">
              <Link href={item.href}>{item.icon}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <ul>
        {bottomIcons.map((item, index) => (
          <li key={index}>
            <Button asChild variant="ghost" size="lg">
              <Link href="#">{item}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
