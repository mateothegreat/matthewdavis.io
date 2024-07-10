<script lang="ts">
  export let tag;
</script>

<div class="cursor-pointer rounded-md bg-black/70 px-2 py-0.5 text-sm text-slate-500 dark:bg-black/90 dark:hover:bg-fuchsia-600 dark:hover:text-white">
  <a href="/blog/tag/{tag}">
    <span class="text-slate-400 dark:text-slate-700 sm:hidden">#</span>
    {tag}
  </a>
</div>
