import type { HTMLButtonAttributes } from "svelte/elements";
import type { ComponentWithChildrenPropsI } from "./common.models";

export type ButtonVariantT = 'primary' | 'secondary';

export interface ButtonPropsI extends ComponentWithChildrenPropsI, Omit<HTMLButtonAttributes, "children"> {
  variant?: ButtonVariantT;
}