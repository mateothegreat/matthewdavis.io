<script lang="ts">
  import { AlertTriangle, CheckCircle, Info, Lightbulb, Notebook, Quote, XCircle } from "lucide-svelte";
  import { type CalloutType } from "./callouts.ts";

  export let variant: CalloutType;
  export let message: string;

  const icons = {
    note: Notebook,
    warning: AlertTriangle,
    info: Info,
    error: XCircle,
    success: CheckCircle,
    tip: Lightbulb,
    quote: Quote
  };

  const colors = {
    note: "text-slate-600 bg-zinc-300 dark:bg-zinc-900 dark:text-slate-500",
    warning: "bg-yellow-100 text-slate-600 dark:bg-yellow-200 dark:text-black",
    info: "text-slate-800 bg-blue-200 dark:text-blue-400 dark:bg-blue-900 dark:text-blue-200",
    error: "bg-red-100 text-red-800 dark:text-red-400 dark:bg-red-700 dark:text-zinc-300",
    success: "text-green-500 bg-green-100 dark:text-green-400 dark:bg-green-800 dark:text-green-100",
    tip: "text-white bg-purple-400 dark:text-purple-400 dark:bg-purple-900 dark:text-purple-100",
    quote: "text-gray-700 bg-gray-200 dark:text-gray-400 dark:bg-zinc-900 dark:text-gray-200"
  };
</script>

<div class={`callout ${colors[variant]} flex items-center gap-2 rounded-md p-4`}>
  {#if icons[variant]}
    <svelte:component this={icons[variant]} class="h-6 w-6" />
  {/if}
  <div class="ml-2">
    {message}
  </div>
</div>
