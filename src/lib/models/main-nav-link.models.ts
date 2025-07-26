import type { ComponentWithChildrenPropsI } from "./common.models";

export interface MainNavLinkI extends ComponentWithChildrenPropsI {
  link: string;
  active: boolean;
  disabled?: boolean;
}