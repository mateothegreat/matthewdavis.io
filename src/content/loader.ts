import { type LoaderContext } from "astro/loaders";
import { notionLoader, type NotionLoaderOptions } from "notion-astro-loader";

export default function notionLoaderWithContent(loaderOptions: NotionLoaderOptions) {
  const notionAstroLoader = notionLoader(loaderOptions);

  return {
    name: "notion-loader-with-content",
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
