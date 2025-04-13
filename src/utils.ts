import { FileTreeItem } from "./types";

export function isFolder(item: FileTreeItem) {
  return item.type === "folder";
}
