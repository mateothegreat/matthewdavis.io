<script lang="ts">
  import { Moon, Sun } from "lucide-svelte";
  import { mode, toggleMode } from "mode-watcher";
</script>

<a on:click={toggleMode}>
  {#if $mode === "dark"}
    <Sun class="h-6 w-6 rotate-0 scale-100 cursor-pointer text-slate-600 transition-all hover:text-green-500" />
  {:else if $mode === "light"}
    <Moon class="h-6 w-6 rotate-0 scale-100 cursor-pointer text-slate-600 transition-all hover:text-green-500" />
  {/if}
</a>
<span class="sr-only">Toggle theme</span>
