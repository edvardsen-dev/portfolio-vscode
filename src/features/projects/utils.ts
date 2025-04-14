import { FileTreeItem } from "@/types";
import { Project } from "./types";
import { CMS_BASE_PATH } from "@/utils";

export function convertProjectToFileTreeItem(project: Project): FileTreeItem {
  return {
    type: "file",
    name: project.title,
    extension: "md",
    icon: "/icons/markdown.svg",
    content: projectToMarkdown(project),
  };
}

function projectToMarkdown(project: Project): string {
  return `# ${project.title}
	
${project.description}

## Table of Contents

- [x] [Features](#features)
- [x] [Stack](#stack)
- [x] [Contributers](#contributers)
- [x] [Content](#${
    project.content[0].title
      ?.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "") || "about-the-project"
  })
- [x] [Resources](#resources)
- [x] [Image Gallery](#image-gallery)

## Features

${project.features.map((feature) => `- [x] ${feature}`).join("\n")}

## Stack

${project.stack.map((stack) => `- [x] ${stack}`).join("\n")}

## Contributers

${project.contributers
  .map((contributer) => `- [x] [${contributer.name}](${contributer.href})`)
  .join("\n")}

${project.content
  .map((content) => {
    let str = ``;
    if (content.title) {
      str += `## ${content.title}\n\n`;
    } else {
      str += `## About the Project\n\n`;
    }
    str += `${content.text.join("\n\n")}`;
    return str;
  })
  .join("\n\n")}

## Resources

${project.resources
  .map((resource) => `- [${resource.label}](${resource.href})`)
  .join("\n")}

## Image Gallery

<table>
  <tbody>
${Array.from({ length: Math.ceil(project.images.length / 2) })
  .map((_, i) => {
    const firstImage = project.images[i * 2];
    const secondImage = project.images[i * 2 + 1];
    return `    <tr>
      ${
        firstImage
          ? `<td><img src="${CMS_BASE_PATH}/api/files/${project.collectionId}/${project.id}/${firstImage}" /></td>`
          : ""
      }
      ${
        secondImage
          ? `<td><img src="${CMS_BASE_PATH}/api/files/${project.collectionId}/${project.id}/${secondImage}" /></td>`
          : ""
      }
    </tr>`;
  })
  .join("\n")}
  </tbody>
</table>

---


	`;
}
