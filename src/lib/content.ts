import { getCollection, type CollectionEntry } from "astro:content"

export type Post = {
  post: CollectionEntry<"blog">
  series: CollectionEntry<"series">
}

export const getPost = async (slug: string): Promise<Post> => {
  console.log(slug);

  const post = (await getCollection("blog")).find(post => post.slug === slug)
  if (!post) throw new Error(`Post with slug ${slug} not found`)

  const series = (await getCollection("series")).find(series => series.data.title === post.data.series)
  if (!series) throw new Error(`Series with slug ${post.data.series} not found`)

  return { post, series }
}