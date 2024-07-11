<script lang="ts">
  import { colors } from "../colors.ts";
  import { calloutIcons } from "../icons.ts";
  import { type Variant } from "../variants.ts";

  export let variant: Variant;
  export let message: string;
</script>

<div class={`${colors[variant]} flex items-center gap-2 rounded-md p-4`}>
  {#if calloutIcons[variant]}
    <svelte:component this={calloutIcons[variant]} class="h-6 w-6" />
  {/if}
  <div class="ml-2">
    {message}
  </div>
</div>
