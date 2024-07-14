<script lang="ts">
  import { BookOpen } from "lucide-svelte";
  import { onMount } from "svelte";
  import { Badge } from "../ui/badge";
  import { type Series } from "./../../lib/content.ts";
  export let series: Series;

  let currentSlug: string;

  onMount(() => {
    currentSlug = window.location.pathname.split("/").pop() || "";
  });
</script>

<div class="b flex flex-col gap-2 rounded-lg border border-slate-400 p-2 dark:border-slate-700">
  <div class="flex items-center gap-1.5 text-sm text-orange-400">
    <Badge variant="secondary" class="flex gap-1 bg-orange-500 px-1.5 py-0.5 text-white">
      <BookOpen class="h-3.5 w-3.5" />
      Series
    </Badge>
    <div class="font-semibold tracking-wider text-orange-500">{series.series?.data.title}</div>
  </div>
  <div class="flex flex-col gap-1">
    {#each series.posts as post, index}
      <div class="text-slate-4000 dark:text-slate-6000 group flex items-center gap-1.5 text-sm tracking-wide" class:text-blue-500={post.slug === currentSlug}>
        <div class="text-xs group-hover:text-slate-400">Part {index + 1}</div>
        <div class="text-sm">
          <a href={post.slug} class="group-hover:text-blue-500">{post.data.title}</a>
        </div>
      </div>
    {/each}
  </div>
</div>
