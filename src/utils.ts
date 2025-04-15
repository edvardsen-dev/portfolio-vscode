import { FileTreeItem } from "./types";

export const CMS_BASE_PATH = process.env.NEXT_PUBLIC_CMS_BASE_PATH;

export function isFolder(item: FileTreeItem) {
  return item.type === "folder";
}

export function l({
  type,
  file,
  func,
  message,
  obj,
}: {
  type: "error" | "info" | "warn";
  file: string;
  func: string;
  message: string;
  obj?: any;
}) {
  if (process.env.NODE_ENV !== "development") return;

  let color;
  switch (type) {
    case "error":
      color = "#f44336";
      break;
    case "info":
      color = "#2196F3";
      break;
    case "warn":
      color = "#FF9800";
      break;
  }
  console.log(`%c[${file} - ${func}] ${message}`, `color: ${color}`, obj);
}
