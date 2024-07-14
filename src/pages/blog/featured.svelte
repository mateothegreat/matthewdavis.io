<script lang="ts">
  import { Stars } from "lucide-svelte";
  import Actions from "./actions.svelte";
  import Author from "./author.svelte";
  import Featured from "./cards/featured.svelte";
  import Tag from "./tag.svelte";

  export let post;
  export let viewing = true;
</script>

<div style="background-image: url({post.data.cover.src})" class=" flex min-h-[250px] w-full flex-row rounded-xl border-2 bg-black/30 bg-cover bg-center bg-blend-darken dark:border-slate-900 dark:bg-zinc-900/40 hover:dark:border-slate-800">
  <div class="flex flex-1 flex-col justify-between gap-2 p-4">
    <div class="flex flex-col gap-2">
      {#if post.data.featured}
        <div class="flex justify-end">
          <div class="flex h-8 items-center gap-1 rounded-md bg-black/70 px-2 text-xs font-bold text-green-500 dark:bg-black/70">
            <Stars class="h-4 w-4" />
            FEATURED
            {#if post.data.featured.edition}
              <span class="uppercase text-slate-500">{post.data.featured.edition}</span>
            {/if}
          </div>
        </div>
      {/if}
      <Featured {post} />
    </div>
    <div class="flex w-full items-center justify-between">
      <div class="flex flex-col justify-between gap-0.5 text-sm font-normal leading-normal text-slate-600 md:flex-row">
        <Author {post} />
        <div class="flex gap-0.5">
          {#if post.data.tags}
            {#each post.data.tags as tag}
              <Tag {tag} />
            {/each}
          {/if}
        </div>
      </div>
      <Actions {post} readmore={!viewing} />
    </div>
  </div>
</div>
