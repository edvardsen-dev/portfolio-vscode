import { FileTreeItem } from "@/types";
import { Education } from "./types";

export function convertEducationToFileTreeItem(
  education: Education
): FileTreeItem {
  return {
    type: "file",
    name: education.title,
    extension: "md",
    icon: "/icons/markdown.svg",
    content: educationToMarkdown(education),
  };
}

function educationToMarkdown(education: Education): string {
  const startDate =
    education.date.start?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) || "Unknown";
  const endDate =
    education.date.end?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) || "Present";

  let markdown = `## ${education.title}\n\n`;

  markdown += `\`\`\`\n${startDate} - ${endDate} | ${education.location}\n\`\`\``;
  markdown += `\n\n### Description\n\n`;
  markdown += `${education.description}\n\n`;

  return markdown;
}
