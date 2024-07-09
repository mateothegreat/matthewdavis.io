<script lang="ts">
  import { type CollectionEntry } from "astro:content";

  export let category: CollectionEntry<"category">;
</script>

<div class="col-span-3 flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 p-4 hover:bg-slate-800 {category.data.theme?.border || 'border-slate-500'} ">
  {#if category.data.logo}
    <div class="h-12 w-12" contenteditable="true" bind:innerHTML={category.data.logo}></div>
  {/if}
  <div class="text-slate-400">{category.data.name}</div>
</div>
