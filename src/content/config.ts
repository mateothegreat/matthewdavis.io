import { defineCollection } from "astro:content";
import { notionLoader } from "notion-astro-loader";

import { PageShema } from "./schema";

const content = defineCollection({
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
  schema: PageShema
});

export const collections = { content };
