<script lang="ts">
  import Link from "./link.svelte";
  import type { TocConfig } from "./toc-config";
  import Toc from "./toc.svelte";

  interface Props {
    config: TocConfig[];
  }

  let { config }: Props = $props();

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
