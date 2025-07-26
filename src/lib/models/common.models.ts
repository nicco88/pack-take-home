import type { Snippet } from "svelte";

export interface ComponentWithChildrenPropsI {
  children: Snippet;
  classList?: string;
}