export type Sizes = "xs" | "sm" | "md" | "lg" | "xl"|'2xl';
export type Spaces =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";
export type Colors =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
export type FontWeight =
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";
export type TextColors =
  | "currentColor"
  | "default"
  | "muted"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "white"
  | "danger";
export type TextSizes = "sm" | "md" | "lg";

export type Radius =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "rounded"
  | "default";

export interface SpacingOptions {
  p?: Spaces;
  pt?: Spaces;
  pr?: Spaces;
  pb?: Spaces;
  pl?: Spaces;
  px?: Spaces;
  py?: Spaces;
  m?: Spaces;
  mt?: Spaces;
  mr?: Spaces;
  mb?: Spaces;
  ml?: Spaces;
  mx?: Spaces;
  my?: Spaces;
}