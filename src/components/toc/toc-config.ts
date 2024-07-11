import type { MarkdownHeading } from "astro";

export interface TocConfig extends MarkdownHeading {
  children?: TocConfig[];
}