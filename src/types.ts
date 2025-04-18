export type TFolder = {
  type: "folder";
  name: string;
  icon?: string;
  children: FileTreeItem[];
};

export type TFile = {
  type: "file";
  name: string;
  extension: "md" | "json" | "js" | "ts" | "gitignore" | "env";
  icon?: string;
  content: string;
};

export type FileTreeItem = TFolder | TFile;
