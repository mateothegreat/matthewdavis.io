import { defineCollection } from "astro:content";
import { PageSchema } from "./schema";
import notionLoaderWithRelations from "./loader";

const content = defineCollection({
  loader: notionLoaderWithRelations({
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

export const collections = { content };
