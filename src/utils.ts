import { FileTreeItem } from "./types";

export const CMS_BASE_PATH = process.env.NEXT_PUBLIC_CMS_BASE_PATH;

export function isFolder(item: FileTreeItem) {
  return item.type === "folder";
}
