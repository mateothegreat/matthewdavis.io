import { getCollection } from "astro:content";

export const getAllTags = async (): Promise<string[]> => {
  const allTags = await getCollection("blog");
  return allTags.map((tag) => tag.data.tags).flat().filter((tag): tag is string => tag !== undefined);
};
