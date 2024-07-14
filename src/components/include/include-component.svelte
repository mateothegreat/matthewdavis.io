<script lang="ts">
  import { Collapsible } from "bits-ui";
  import { Maximize2, Minimize2 } from "lucide-svelte";
  import { slide } from "svelte/transition";
  import { colors } from "../colors";
  import { calloutIcons } from "../icons";
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
  <div class="justify-end text-sm">
    <a href={`https://github.com/mateothegreat/matthewdavis.io/blob/main/src/content/snippets/${category}/${name}.md`}>Edit</a>
  </div>
</Collapsible.Root>
