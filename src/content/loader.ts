import { type LoaderContext } from "astro/loaders";
import { notionLoader, type NotionLoaderOptions } from "notion-astro-loader";

export default function notionLoaderWithRelations(loaderOptions: NotionLoaderOptions) {
  const notionAstroLoader = notionLoader(loaderOptions);

  return {
    name: "notion-loader-with-relations",
    load: async function (context: LoaderContext) {
      const logger = context.logger;
      const store = context.store;

      await notionAstroLoader.load({
        ...context,
        store: store
      });

      logger.info(`notion-loader-with-relations: Loaded pages from base loader.`);
    }
  };
}
