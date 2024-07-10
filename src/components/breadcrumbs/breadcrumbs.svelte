<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import type { Crumb } from "./crumb";

  export let crumbs: Crumb[] = [];

  const _crumbs: Crumb[] = [
    {
      label: "Home",
      href: "/"
    },
    ...crumbs
  ];
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    {#each _crumbs as crumb, index}
      <Breadcrumb.Item>
        {#if index < _crumbs.length - 1}
          <Breadcrumb.Link href={crumb.href}>{crumb.label}</Breadcrumb.Link>
          <Breadcrumb.Separator />
        {:else}
          <Breadcrumb.Page>{crumb.label}</Breadcrumb.Page>
        {/if}
      </Breadcrumb.Item>
    {/each}
  </Breadcrumb.List>
</Breadcrumb.Root>
