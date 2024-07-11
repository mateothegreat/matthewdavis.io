<script lang="ts">
  import { Button } from "$components/ui/button";
  import Collapsible from "$components/ui/collapsible";
  import { Expand } from "lucide-svelte";

  export let content: string;
</script>

<Collapsible.Root class="w-[350px] space-y-2">
  <div class="flex items-center justify-between space-x-4 px-4">
    <h4 class="text-sm font-semibold">@huntabyte starred 3 repositories</h4>
    <Collapsible.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
        <Expand class="h-4 w-4" />
        <span class="sr-only">Toggle</span>
      </Button>
    </Collapsible.Trigger>
  </div>
  <div class="rounded-md border px-4 py-3 font-mono text-sm">@huntabyte/bits-ui</div>
  <Collapsible.Content class="space-y-2">
    <div contenteditable bind:innerHTML={content}></div>
  </Collapsible.Content>
</Collapsible.Root>
