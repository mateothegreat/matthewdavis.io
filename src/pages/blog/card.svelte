<script lang="ts">
  import Actions from "./actions.svelte";
  import Normal from "./cards/normal.svelte";
  import Tag from "./tag.svelte";

  export let post;
</script>

<div style="background-image: url({post.data.cover})" class="inline-flex min-h-[175px] min-w-[300px] cursor-pointer flex-col rounded-xl border-2 bg-black/30 bg-cover bg-center bg-blend-darken dark:border-slate-900 dark:bg-zinc-900/40 hover:dark:border-slate-800">
  <div class="flex flex-1 flex-col gap-2 p-2">
    <Normal class="flex-1" {post} />
    <div class="flex items-center justify-between sm:w-full sm:flex-row">
      <div class="flex gap-0.5 text-sm font-normal leading-normal text-slate-600">
        {#if post.data.tags}
          {#each post.data.tags as tag}
            <Tag {tag} />
          {/each}
        {/if}
      </div>
      <Actions {post} />
    </div>
  </div>
</div>
