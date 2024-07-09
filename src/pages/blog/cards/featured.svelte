<script lang="ts">
  export let post;
</script>

<div class="flex w-full items-center gap-2 rounded-md bg-black/60 px-3 py-1.5 text-3xl font-bold leading-9 text-fuchsia-500 dark:bg-black/80">
  {post.data.title}
</div>
<div class="line-clamp-5 rounded-md bg-black/60 px-2 py-1 text-sm font-normal text-slate-400 dark:bg-black/80 dark:text-slate-400">
  {post.data.description}
</div>
