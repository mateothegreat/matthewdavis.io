<script lang="ts">
  import { BookMarked, Home, ListVideo, Navigation, Search } from "lucide-svelte";
</script>

<div class="flex flex-col justify-between pl-4 pr-2 {$$props.class}">
  <div class="flex flex-col gap-3 text-indigo-700">
    <div class="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-300 p-2 hover:bg-indigo-600 hover:text-slate-100 dark:bg-zinc-900 dark:hover:bg-indigo-500/50 dark:hover:text-slate-300">
      <Home class="h-5 w-5" />
    </div>
    <div class="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-300 p-2 hover:bg-indigo-600 hover:text-slate-100 dark:bg-zinc-900 dark:hover:bg-indigo-500/50 dark:hover:text-slate-300">
      <Navigation class="h-5 w-5" />
    </div>
    <div class="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-300 p-2 hover:bg-indigo-600 hover:text-slate-100 dark:bg-zinc-900 dark:hover:bg-indigo-500/50 dark:hover:text-slate-300">
      <Search class="h-5 w-5" />
    </div>
    <div class="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-300 p-2 hover:bg-indigo-600 hover:text-slate-100 dark:bg-zinc-900 dark:hover:bg-indigo-500/50 dark:hover:text-slate-300">
      <BookMarked class="h-5 w-5" />
    </div>
  </div>
  <div class="flex flex-col gap-3 text-indigo-700">
    <div class="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-300 p-2 hover:bg-indigo-600 hover:text-slate-100 dark:bg-zinc-900 dark:hover:bg-indigo-500/50 dark:hover:text-slate-300">
      <ListVideo class="h-5 w-5" />
    </div>
    <div class="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-300 p-2 hover:bg-indigo-600 hover:text-slate-100 dark:bg-zinc-900 dark:hover:bg-indigo-500/50 dark:hover:text-slate-300">
      <BookMarked class="h-5 w-5" />
    </div>
  </div>
</div>
