<script lang="ts">
  import Button from "$src/components/ui/button/button.svelte";
  import { Link2, Share2 } from "lucide-svelte";

  export let post;
</script>

<div class="xs:text-xl flex w-full items-center justify-between gap-2 rounded-md bg-black/80 py-1.5 pl-3 text-3xl font-bold leading-9 text-fuchsia-500 dark:bg-black/80">
  <div class="">
    {post.data.title}
  </div>
  <div class="flex">
    <Button variant="ghost">
      <Share2 class="h-5 w-5 text-slate-500" />
    </Button>
    <Button variant="ghost">
      <Link2 class="h-5 w-5 text-slate-500" />
    </Button>
  </div>
</div>
<div class="xs:text-xs line-clamp-5 rounded-md bg-black/70 px-2 py-1 text-sm font-normal text-slate-400 dark:bg-black/80 dark:text-slate-400">
  {post.data.description}
</div>
