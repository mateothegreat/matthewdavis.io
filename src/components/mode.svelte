<script lang="ts">
  import { MoonStar, Sun } from "lucide-svelte";
  import { mode, toggleMode } from "mode-watcher";
</script>

<a on:click={toggleMode}>
  {#if $mode === "dark"}
    <Sun class="h-6 w-6 rotate-0 scale-100 cursor-pointer text-yellow-500/75 transition-all hover:text-green-500" />
  {:else if $mode === "light"}
    <MoonStar class="h-6 w-6 rotate-0 scale-100 cursor-pointer text-sky-600 transition-all hover:text-green-500" />
  {/if}
</a>
<span class="sr-only">Toggle theme</span>
