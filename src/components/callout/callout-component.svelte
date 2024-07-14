<script lang="ts">
  import { colors } from "../colors.ts";
  import { calloutIcons } from "../icons.ts";
  import { type Variant } from "../variants.ts";

  export let variant: Variant;
  export let message: string;
</script>

<div class={`callout ${colors[variant]} flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-sm`}>
  {#if calloutIcons[variant]}
    <svelte:component this={calloutIcons[variant]} class="h-7 w-7" />
  {/if}
  {#if message}
    <div class="ml-2">
      {message}
    </div>
  {/if}
  {#if $$slots.default}
    <div class="">
      <slot />
    </div>
  {/if}
</div>
