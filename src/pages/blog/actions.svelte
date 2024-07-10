<script lang="ts">
  import Button from "$components/ui/button/button.svelte";
  import { BookmarkPlus } from "lucide-svelte";

  export let post;
  export let readmore: boolean = true;
</script>

<div class="flex gap-1">
  <Button variant="ghost" class="h-8 bg-black/60 text-xs font-semibold text-fuchsia-500 dark:bg-black/70 dark:hover:bg-fuchsia-600 dark:hover:text-white">
    <BookmarkPlus class="h-4 w-4 " />
  </Button>
  {#if readmore}
    <a href="/blog/{post.slug}">
      <Button variant="ghost" class="dark:text-slate-5000 h-8 bg-black/60 text-xs font-semibold text-slate-400 dark:bg-black/70 dark:hover:bg-fuchsia-600 dark:hover:text-white sm:hidden">READ MORE</Button>
    </a>
  {/if}
</div>
