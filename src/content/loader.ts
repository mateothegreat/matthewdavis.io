import { type LoaderContext } from "astro/loaders";
import { notionLoader, type NotionLoaderOptions } from "notion-astro-loader";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export default function notionLoaderWithRelations(loaderOptions: NotionLoaderOptions) {
  const notionAstroLoader = notionLoader(loaderOptions);

  // Notion API client
  const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  return {
    name: "notion-loader-with-relations",
    load: async function (context: LoaderContext) {
      const logger = context.logger;
      const store = context.store;

      await notionAstroLoader.load({
        ...context,
        store: store
      });

      logger.info(`notion-loader-with-content: Loaded pages from base loader.`);
    }
  };
}
