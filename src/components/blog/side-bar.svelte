<script>
  import Button from "$components/ui/button/button.svelte";
  import { Send, ShieldCheck } from "lucide-svelte";
</script>

<div class="h-full w-[500px] {$$props.class} flex flex-col gap-2">
  <div class="flex flex-col rounded-xl border-2 border-slate-900 bg-gray-900/50 p-2">
    <h3 class="font-semibold">Send me deets!</h3>
    <p class="text-xs text-slate-400">Get an update on new posts and events.</p>
    <p class="flex items-center gap-1 text-xs text-slate-400">I promise, no spam of shady business! <ShieldCheck class="h-4 w-4 text-green-600" /></p>
    <Button class="mt-2 flex w-full items-center gap-2 text-fuchsia-600" variant="outline">
      <Send class="h-5 w-5" />
      Subscribe by email..
    </Button>
  </div>
</div>
