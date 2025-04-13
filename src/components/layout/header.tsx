import {
  ArrowLeft,
  ArrowRight,
  LayoutPanelLeft,
  PanelBottom,
  PanelLeft,
  PanelRight,
  Search,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { notImplemented } from "@/lib/utils";

const listItems = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const iconsList = [
  <LayoutPanelLeft className="size-4" />,
  <PanelLeft className="size-4" />,
  <PanelBottom className="size-4" />,
  <PanelRight className="size-4" />,
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b">
      <ul className="flex items-center text-muted-foreground">
        <img
          src="/favicon/favicon-32x32.png"
          alt="Joakim Edvardsen Memoji"
          className="size-6"
        />
        {listItems.map((item) => (
          <Button key={item} variant="ghost" size="sm" onClick={notImplemented}>
            <li>{item}</li>
          </Button>
        ))}
      </ul>
      <div className="flex-grow flex justify-center items-center">
        <Button variant="ghost" size="sm" onClick={notImplemented}>
          <ArrowLeft />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={notImplemented}
        >
          <ArrowRight />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-[3px] h-6 font-normal text-xs w-1/2 text-muted-foreground"
          onClick={notImplemented}
        >
          <Search className="size-3" />
          portfolio-vscode
        </Button>
      </div>
      <div className="flex items-center">
        {iconsList.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className="px-4"
            onClick={notImplemented}
          >
            {item}
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          className="px-4"
          onClick={notImplemented}
        >
          _
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="px-4"
          onClick={notImplemented}
        >
          <div className="size-3 border border-foreground" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="px-4"
          onClick={notImplemented}
        >
          <X />
        </Button>
      </div>
    </header>
  );
}
