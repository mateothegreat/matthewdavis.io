<script lang="ts">
  import { nest } from "$lib/arrays";
  import type { MarkdownHeading } from "astro";

  interface Props {
    headings: MarkdownHeading[];
  }

  let { headings }: Props = $props();
  const nestedHeadings = nest(headings);
</script>

<div class="w-96">
  {#each headings as heading}
    <a href="#{heading.slug}">{heading.text}</a>
  {/each}
</div>
