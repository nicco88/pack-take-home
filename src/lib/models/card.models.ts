import type { FlyParams } from "svelte/transition";
import type { ComponentWithChildrenPropsI } from "./common.models";
export interface CardPropsI extends ComponentWithChildrenPropsI {
  padding?: 'sm' | 'md';
  animationDelay?: number;
  animate?: boolean;
  flyParams?: FlyParams;
}