<script lang="ts">
  import { Collapsible } from "bits-ui";
  import { Edit, Maximize2, Minimize2 } from "lucide-svelte";
  import { slide } from "svelte/transition";
  import { colors } from "../colors";
  import { calloutIcons } from "../icons";
  import { Badge } from "../ui/badge";
  import { Button } from "../ui/button";
  import { type Variant } from "../variants";

  export let title: string;
  export let name: string;
  export let category: string;
  export let variant: Variant;
  export let content: string;
  export let expanded: boolean;

  let open: boolean = expanded;
</script>

<Collapsible.Root class={`${colors[variant]} flex flex-col gap-4 rounded-lg p-4`} bind:open>
  <div class="flex items-center justify-between">
    <div on:click={() => (open = !open)} class="flex w-full cursor-pointer items-center gap-2 font-medium">
      <svelte:component this={calloutIcons[variant]} class="h-6 w-6" />
      {title}
    </div>
    <Collapsible.Trigger class="">
      <div>
        {#if open}
          <Minimize2 class="h-6 w-6" />
        {:else}
          <Maximize2 class="h-6 w-6" />
        {/if}
      </div>
      <Button class="sr-only">Toggle</Button>
    </Collapsible.Trigger>
  </div>
  <Collapsible.Content class="" transition={slide}>
    <div contenteditable bind:innerHTML={content} />
  </Collapsible.Content>
  <div class="flex items-center justify-end text-sm">
    <a class="flex items-center gap-1 hover:text-blue-400" href={`https://github.com/mateothegreat/matthewdavis.io/blob/main/src/content/snippets/${category}/${name}.md`}>
      <Badge variant="outline">Snippet</Badge>
      .../content/snippets/{category}/{name}.md
      <Edit class="h-4 w-4" />
    </a>
  </div>
</Collapsible.Root>
