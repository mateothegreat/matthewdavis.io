<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Github, Linkedin, Mail, Stars } from "lucide-svelte";
  import Mode from "./mode.svelte";
  import Button from "./ui/button/button.svelte";
</script>

<header class="p-2">
  <nav class="flex items-center">
    <div class="p-2">
      <a href="/">
        <img class="min-w-fit" src="title.png" alt="matthewdavis.io" />
      </a>
    </div>
    <div class="flex flex-1 items-center">
      <div class="flex flex-1 flex-col gap-4">
        <div class="flex items-end justify-end">
          <div class="mr-3.5 flex h-8 cursor-pointer items-center gap-2 rounded-md border-2 border-slate-400 bg-zinc-500/70 bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-2 text-sm font-bold dark:border-slate-500 dark:hover:border-indigo-600">
            <div class="flex gap-1 text-xs text-black">
              <Stars class="h-4 w-4" />
              FEATURED
            </div>
            <span class="text-shite text-xs uppercase">Speed kills software engineering!</span>
            <span class="text-xs text-slate-900">JULY EDITION</span>
          </div>
        </div>
        <div class="flex flex-1 justify-end gap-10 tracking-widest">
          <Button variant="outline">
            <a href="/" class="text-slate-600">HOME</a>
          </Button>
          <Button variant="outline">
            <a href="/blog" class="bg-gradient-to-r from-slate-500 via-purple-600 to-blue-600 bg-clip-text text-transparent underline-offset-8 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-slate-600 hover:bg-clip-text hover:text-transparent">TOPICS</a>
          </Button>
          <Button variant="outline">
            <a href="/consulting" class="text-indigo-600">GET HELP</a>
          </Button>
          <Button variant="outline">
            <a href="/about" class="text-slate-600">ABOUT</a>
          </Button>
          <div class="ml-14 mr-4 flex gap-5">
            <Tooltip.Root openDelay={500}>
              <Tooltip.Trigger>
                <a href="https://github.com/mateothegreat" target="_blank">
                  <Github class="cursor-pointer text-slate-600 hover:text-green-500" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>View my open source contributions on GitHub.</p>
              </Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root openDelay={500}>
              <Tooltip.Trigger>
                <a href="https://linkedin.com/in/runtotrouble" target="_blank">
                  <Linkedin class="cursor-pointer text-slate-600 hover:text-green-500" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>View my professional profile on Linkedin.</p>
              </Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root openDelay={500}>
              <Tooltip.Trigger>
                <a href="mailto:matthew@matthewdavis.io" target="_blank">
                  <Mail class="cursor-pointer text-slate-600 hover:text-green-500" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Send me an email, I'd like to hear from you!</p>
              </Tooltip.Content>
            </Tooltip.Root>
            <div class="ml-3">
              <Mode />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
