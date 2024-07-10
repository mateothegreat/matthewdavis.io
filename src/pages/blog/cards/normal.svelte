<script lang="ts">
  export let post;
</script>

<div class="flex flex-col gap-2 {$$props.class}">
  <div class="flex w-full items-center gap-2 rounded-md bg-black/80 px-3 py-0.5 text-xl font-bold leading-9 text-indigo-500 dark:bg-black/80">
    <a href="/blog/{post.slug}" class="hover:text-fuchsia-500">{post.data.title}</a>
  </div>
  <div class="line-clamp-2 rounded-md bg-black/70 px-2 py-1 text-sm font-normal text-slate-400 dark:bg-black/80 dark:text-slate-400">
    {post.data.description}
  </div>
</div>
