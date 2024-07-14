<script lang="ts">
  import * as Tooltip from "$components/ui/tooltip";
  import { Github, Linkedin, Mail, Menu, Stars, X } from "lucide-svelte";
  import { writable } from "svelte/store";
  import Mode from "./mode.svelte";
  import Button from "./ui/button/button.svelte";

  const isMenuOpen = writable(true);
</script>

<header class="md:p-4 xs:pt-2">
  <nav class="flex items-center">
    <div class="xs:hidden">
      <a href="/">
        <img class="ml-1 min-w-fit sm:m-4" src="/title.png" alt="matthewdavis.io" />
      </a>
    </div>
    <div class="flex flex-1 items-center">
      <div class="flex flex-1 flex-col gap-4">
        <!-- Featured Post -->
        <div class="flex items-end justify-end">
          <div class="flex h-8 cursor-pointer items-center gap-2 rounded-md border-2 border-slate-400 bg-zinc-500/70 bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-2 text-sm font-bold dark:border-slate-500 dark:hover:border-indigo-600 sm:mr-2 xs:m-1 xs:w-full">
            <div class="flex gap-1 text-xs text-black">
              <Stars class="h-4 w-4" />
              FEATURED
            </div>
            <span class="text-shite text-xs uppercase">Speed kills software engineering!</span>
            <span class="text-xs text-slate-900 xs:hidden">JULY EDITION</span>
          </div>
        </div>
        <!-- End Featured Post -->
        <div class="flex justify-end">
          <div class="flex flex-row justify-end rounded-lg bg-zinc-300/90 px-2 py-1 tracking-widest dark:bg-zinc-900/90 sm:mr-2 sm:bg-slate-300/90 xs:w-full">
            <Button variant="ghost" on:click={() => ($isMenuOpen = !$isMenuOpen)} class="text-slate-600 sm:visible md:hidden xs:hidden">
              {#if $isMenuOpen}
                <X class="h-6 w-6" />
              {:else}
                <Menu class="h-6 w-6" />
              {/if}
            </Button>
            {#if $isMenuOpen}
              <div class="flex w-full xs:flex-col-reverse xs:gap-2 xs:pt-2">
                <div class="flex xs:justify-evenly">
                  <a href="/" class="text-slate-500">
                    <Button variant="ghost">HOME</Button>
                  </a>
                  <a href="/about" class="text-slate-500">
                    <Button variant="ghost" class="xs:hidden">ABOUT</Button>
                  </a>
                  <a href="/blog" class="bg-gradient-to-r from-slate-500 via-purple-600 to-blue-600 bg-clip-text text-transparent underline-offset-8 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-slate-600 hover:bg-clip-text hover:text-transparent">
                    <Button variant="ghost">ARTICLES</Button>
                  </a>
                  <a href="/consulting" class="text-[#ff3d51]">
                    <Button class="flex gap-1 " variant="ghost">
                      <span class="sm:hidden">GET </span>
                      HELP
                      <svg class="-mt-[1px] h-5 w-5" enable-background="new 0 0 520 520" height="512" viewBox="0 0 520 520" width="512" xmlns="http://www.w3.org/2000/svg" id="fi_4360666"
                        ><g id="_x31_5_x2C__support_x2C__secure_x2C__insurance"
                          ><g
                            ><g
                              ><g fill="#ed1d36"
                                ><path d="m415.965 108.85c-1.232 0-2.464-.47-3.404-1.41-1.88-1.88-1.88-4.928 0-6.807l22.279-22.279c1.88-1.881 4.928-1.881 6.808 0 1.88 1.88 1.88 4.928 0 6.807l-22.279 22.279c-.94.94-2.171 1.41-3.404 1.41z"></path><path d="m81.755 443.069c-1.232 0-2.464-.47-3.403-1.41-1.88-1.879-1.881-4.928-.001-6.808l22.279-22.288c1.879-1.879 4.928-1.88 6.808-.001 1.881 1.879 1.881 4.928.001 6.808l-22.279 22.289c-.94.94-2.172 1.41-3.405 1.41z"></path><path d="m438.245 443.069c-1.233 0-2.465-.47-3.405-1.41l-22.279-22.288c-1.88-1.88-1.879-4.929.001-6.808 1.88-1.88 4.928-1.88 6.808.001l22.279 22.288c1.879 1.88 1.879 4.929-.001 6.808-.94.939-2.172 1.409-3.403 1.409z"></path><path
                                  d="m104.034 108.85c-1.232 0-2.464-.47-3.404-1.41l-22.279-22.28c-1.88-1.88-1.88-4.928 0-6.807 1.881-1.881 4.928-1.881 6.808 0l22.279 22.279c1.88 1.88 1.88 4.928 0 6.807-.94.941-2.171 1.411-3.404 1.411z"></path
                                ></g
                              ><path d="m458.58 169.511-36.525 25.05h-48.645-.005-.005c-5.745-9.945-12.762-19.063-20.83-27.13s-17.185-15.085-27.13-20.83v-.005-.005-45.42l25.05-39.75c23.884 10.9 45.456 25.982 63.782 44.308 18.327 18.328 33.408 39.901 44.308 63.782z" fill="#e4ebf8"></path><path d="m373.41 325.441h46.645l38.525 25.06c-10.905 23.884-25.984 45.454-44.308 63.777-18.325 18.325-39.896 33.403-63.782 44.303l-25.05-40.41v-44.76-.005-.005c9.945-5.745 19.063-12.763 27.13-20.83s15.085-17.185 20.83-27.13h.005z" fill="#e4ebf8"></path><path d="m194.56 373.411v53.7l-25.05 31.47c-23.886-10.9-45.456-25.978-63.782-44.303-18.324-18.323-33.404-39.893-44.308-63.777l34.643-25.06h50.527.005.005c5.745 9.945 12.762 19.063 20.83 27.13 8.068 8.068 17.185 15.085 27.13 20.83v.005z" fill="#e4ebf8"></path><path
                                d="m194.56 146.591v.005.005c-9.945 5.745-19.063 12.762-27.13 20.83s-15.085 17.185-20.83 27.13h-.005-.005-50.527l-34.643-25.05c10.9-23.881 25.981-45.454 44.308-63.782 18.326-18.327 39.898-33.409 63.782-44.308l33.545 31.475z"
                                fill="#e4ebf8"></path
                              ><path d="m325.44 373.411c3.027 10.293 26.04 88.54 31.26 106.29-59.787 26.377-130.455 27.77-193.4 0 5.176-17.6 28.292-96.197 31.26-106.29 4.123 2.336 8.241 4.526 12.8 6.48 15.763 6.966 32.951 10.573 48.81 10.96 1.974.074 5.507.081 7.66 0 19.814-.483 40.804-5.832 59.8-16.42.61-.33 1.21-.68 1.81-1.02z" fill="#ff3445"></path><path d="m479.7 163.301c27.065 61.395 27.095 131.926 0 193.41l-21.12-6.21v-.01l-85.17-25.05c.34-.6.69-1.2 1.02-1.81 22.379-40.058 21.599-88.597 0-127.26-.33-.61-.68-1.21-1.02-1.81l85.17-25.05z" fill="#ff3445"></path><path
                                d="m325.44 146.591c-3.68-2.085-5.246-2.899-7.44-3.98-2.109-1.054-5.219-2.482-7.55-3.44-13.311-5.734-30.435-9.625-46.62-10.02-8.687-.328-20.001.489-29.94 2.55-8.919 1.699-20.982 5.558-30.09 10.04-3.313 1.546-6.102 3.072-9.24 4.85-3.027-10.293-26.04-88.54-31.26-106.29 61.396-27.066 131.937-27.095 193.4 0-5.176 17.6-28.292 96.197-31.26 106.29z"
                                fill="#ff3445"></path
                              ><path d="m146.59 194.561c-3.042 5.368-5.616 10.389-8.22 16.95-1.786 4.381-3.736 10.356-4.7 14.05-3.936 14.085-5.515 30.855-4.03 46.45.08 1.229.487 4.524.59 5.36 2.258 16.527 7.293 31.856 15.34 46.26.33.61.68 1.21 1.02 1.81l-85.17 25.05v.01l-21.12 6.21c-27.057-61.397-27.103-131.93 0-193.41 17.6 5.176 96.197 28.292 106.29 31.26z" fill="#ff3445"></path></g
                            ></g
                          ></g
                        ></svg>
                    </Button>
                  </a>
                </div>
                <div class="flex items-center justify-center gap-5 md:ml-6">
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
                  <div class="md:ml-4">
                    <Mode />
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
