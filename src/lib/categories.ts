import { getCollection, type CollectionEntry } from "astro:content";

export const getCategories = async (): Promise<CollectionEntry<'category'>[]> => {
  return (await getCollection("category")).sort((a, b) => a.data.name.localeCompare(b.data.name));
}