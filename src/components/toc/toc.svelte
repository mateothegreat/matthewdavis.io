<script lang="ts">
  import Link from "./link.svelte";
  import type { TocConfig } from "./toc-config";
  import Toc from "./toc.svelte";

  export let config: TocConfig[];

  let items = Array.isArray(config) ? config : [];
</script>

<div class="toc">
  {#each items as child}
    <Link config={child} />
    {#if child.children}
      <Toc config={child.children} />
    {/if}
  {/each}
</div>
