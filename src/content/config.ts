import { defineCollection } from "astro:content";
import { PageSchema, SeriesSchema } from "./schema";
import { notionLoader } from "notion-astro-loader";

const pages = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_API_KEY,
    database_id: "16ad7342-e571-80c4-a065-c7a1015871d3",
    filter: {
      property: "Status",
      status: { equals: "Done" }
    },
    sorts: [
      {
        property: "Publish Date",
        direction: "descending"
      }
    ]
  }),
  schema: PageSchema
});

const series = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_API_KEY,
    database_id: "1e8d7342-e571-80b9-8ff8-e0b6d080b4a0"
  }),
  schema: SeriesSchema
});

export const collections = { pages, series };
