import React, { CSSProperties, ReactNode } from "react";
import {FontWeight, SpacingOptions, TextColors, TextSizes} from "../types/core-types";

export interface TextProps extends SpacingOptions {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  ariaLabel?: string;
  size?: TextSizes;
  color?: TextColors;
  weight?: FontWeight;
  textTransform?: CSSProperties["textTransform"];
  textAlign?: CSSProperties["textAlign"];
  textDecoration?: CSSProperties["textDecoration"];
  truncate?: boolean;
  lineClamp?: number;
  style?: object;
  children?: ReactNode;
  className?: string;
}

export default function Title({
  as = "h1",
  weight,
  ariaLabel,
  children,
  color = "primary",
  size,
  style,
  textAlign,
  textDecoration,
  textTransform,
  truncate,
  lineClamp,
  className,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
}: TextProps) {
  const classNames = [
      `break-word`,
    size ? `title-${size}` : `${as}`,
    color && `text-${color}`,
    textAlign && `text-${textAlign}`,
    textDecoration && `text-${textDecoration}`,
    textTransform && `text-${textTransform}`,
    truncate ? "text-truncate" : "",
    lineClamp && `line-clamp-${lineClamp}`,
    weight && `font-${weight}`,
    p && `p-${p}`,
    pt && `pt-${pt}`,
    pr && `pr-${pr}`,
    pb && `pb-${pb}`,
    pl && `pl-${pl}`,
    px && `px-${px}`,
    py && `py-${py}`,
    m && `m-${m}`,
    mt && `mt-${mt}`,
    mr && `mr-${mr}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
      className
  ]
    .filter(Boolean)
    .join(" ");

  const props: React.HTMLProps<HTMLElement> = {
    className: classNames,
    style,
    role: "heading",
    "aria-label": ariaLabel,
  };

  return React.createElement(as, props, children);
}
