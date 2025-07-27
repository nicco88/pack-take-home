import type { ComponentWithChildrenPropsI } from "./common.models";

export type ContentLinkTrendT = null | "up" | "down";

export interface ContentLinkPropsI extends ComponentWithChildrenPropsI {
  link: string;
  trend: ContentLinkTrendT;
}