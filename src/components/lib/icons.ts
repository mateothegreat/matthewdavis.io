import type { Variant } from "../variants";

export type IconSettings = {
  name: string;
  classes: string;
  size: number;
}

export const Icons: { [key in Variant]: IconSettings } = {
  note: {
    name: "mdi:notebook-outline",
    classes: "text-slate-600 bg-zinc-300 dark:bg-zinc-900 dark:text-slate-500",
    size: 20
  },
  warning: {
    name: "mdi:warning",
    classes: "bg-yellow-100 text-slate-600 dark:bg-yellow-300/80 dark:text-black",
    size: 18
  },
  info: {
    name: "mdi:information-outline",
    classes: "text-slate-800 bg-blue-200 dark:text-blue-400 dark:bg-blue-900 dark:text-blue-200",
    size: 18
  },
  error: {
    name: "mdi:alert-circle-outline",
    classes: "bg-red-100 text-red-800 dark:text-red-4000 dark:bg-red-7000 dark:text-zinc-300",
    size: 18
  },
  success: {
    name: "mdi:link-variant-plus",
    classes: "text-green-500 bg-green-100 dark:text-green-4000 dark:bg-green-800 dark:text-green-100",
    size: 18
  },
  tip: {
    name: "mdi:link-variant-plus",
    classes: "text-white bg-purple-4000 dark:text-purple-4000 dark:bg-purple-900 dark:text-purple-100",
    size: 18
  },
  quote: {
    name: "mdi:link-variant-plus",
    classes: "text-gray-700 bg-gray-200 dark:text-gray-400 dark:bg-zinc-900 dark:text-gray-200",
    size: 18
  },
  link: {
    name: "mdi:link-variant",
    classes: "text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-blue-900",
    size: 20
  }
}