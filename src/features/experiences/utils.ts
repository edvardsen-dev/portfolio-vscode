import { FileTreeItem } from "@/types";
import { Experience } from "./types";
import { CMS_BASE_PATH } from "@/utils";

export function convertExperienceToFileTreeItem(
  experience: Experience
): FileTreeItem {
  return {
    type: "file",
    name: experience.title,
    extension: "md",
    icon: "/icons/markdown.svg",
    content: experienceToMarkdown(experience),
  };
}

function experienceToMarkdown(experience: Experience): string {
  const companyName = experience.company.href
    ? `[${experience.company.name}](${experience.company.href})`
    : experience.company.name;
  const startDate = experience.date.start?.toLocaleDateString("en-uk", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const endDate =
    experience.date.end?.toLocaleDateString("en-uk", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }) || "Present";

  let markdown = `## ${experience.title}\n`;

  if (experience.company.logo) {
    markdown += `
| ![${experience.company.name}](${CMS_BASE_PATH}/api/files/${experience.collectionId}/${experience.id}/${experience.company.logo}) |
| :--: |
| ${companyName} | 
		`;
  } else {
    markdown += `**${companyName}**`;
  }
  markdown += `\n`;

  markdown += `\`\`\`\n${startDate} - ${endDate} | ${experience.location}\n\`\`\``;

  markdown += `\n\n### Description\n\n`;
  markdown += `${experience.description}\n\n`;

  if (experience.technologies && experience.technologies.length > 0) {
    markdown += `### Technologies\n\n`;
    markdown += `${experience.technologies
      .map((tech) => `- [x] ${tech}`)
      .join("\n")}\n\n`;
  }

  return markdown;
}
