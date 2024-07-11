<script lang="ts">
  import type { TocConfig } from "./toc-config";

  export let config: TocConfig;
</script>

<div class="mb-1" style="margin-left: {(config.depth - 1) * 15}px;">
  <a class="block w-full overflow-hidden truncate text-sm hover:text-blue-600" href="#{config.slug}">
    {config.text}
  </a>
</div>
