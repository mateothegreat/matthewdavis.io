import { getCollection, type CollectionEntry } from "astro:content";

export type Post = {
  post: CollectionEntry<"blog">
  series?: CollectionEntry<"series">
}

export type Series = {
  series?: CollectionEntry<"series">
  posts: CollectionEntry<"blog">[]
}

export const getPost = async (slug: string): Promise<Post> => {
  const post = (await getCollection("blog")).find(post => post.slug === slug)
  if (!post) throw new Error(`Post with slug ${slug} not found`)

  let series: CollectionEntry<"series"> | undefined = undefined;

  if (post.data.series) {
    series = (await getCollection("series")).find(series => series.data.title === post.data.series)!
  }

  return { post, series }
}

export const getSeries = async (slug: string): Promise<Series | void> => {
  const series = (await getCollection("series")).find(series => series.slug === slug)

  const posts: CollectionEntry<"blog">[] = []
  if (series) {
    for (const item of series.data.items) {
      const post = (await getCollection("blog")).find(post => post.slug === item)
      if (post) {
        posts.push(post)
      }
    }

    return { series, posts }
  }
}