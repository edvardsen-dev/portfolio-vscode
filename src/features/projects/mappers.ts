import { ProjectResponse } from "./dtos";
import { Project } from "./types";

export function mapProjectsResponseToProject(res: ProjectResponse): Project {
  return {
    id: res.id,
    collectionId: res.collectionId,
    collectionName: res.collectionName,
    title: res.title,
    description: res.description,
    thumbnail: res.thumbnail,
    images: res.images,
    stack: res.meta.stack,
    contributers: res.meta.contributers,
    features: res.meta.features,
    resources: res.meta.resources,
    live: res.live,
    content: res.content.sections,
    updatedAt: new Date(res.updated),
  };
}
