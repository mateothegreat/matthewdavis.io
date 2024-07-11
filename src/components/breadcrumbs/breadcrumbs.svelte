<script lang="ts">
  import * as Breadcrumb from "$components/ui/breadcrumb";
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

<Breadcrumb.Root class={$$props.class}>
  <Breadcrumb.List>
    {#each _crumbs as crumb, index}
      <Breadcrumb.Item>
        {#if index < _crumbs.length - 1}
          <Breadcrumb.Link href={crumb.href} class="text-slate-600 hover:text-blue-600">{crumb.label}</Breadcrumb.Link>
          <Breadcrumb.Separator />
        {:else}
          <Breadcrumb.Page>{crumb.label}</Breadcrumb.Page>
        {/if}
      </Breadcrumb.Item>
    {/each}
  </Breadcrumb.List>
</Breadcrumb.Root>
