import React, { CSSProperties, ReactNode } from "react";
import { FontWeight, TextColors, TextSizes } from "../types/core-types";

export interface TextProps {
  as?: "p" | "span" | "label";
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
  color?: TextColors;
  fontStyle?: CSSProperties["fontStyle"];
  fontWeight?: FontWeight;
  size?: TextSizes;
  style?: CSSProperties | undefined;
  textTransform?: CSSProperties["textTransform"];
  textAlign?: CSSProperties["textAlign"];
  textDecoration?: CSSProperties["textDecoration"];
  truncate?: boolean;
  lineClamp?: number;
}

export default function Text({
  as = "p",
  ariaLabel,
  className,
  children,
  color = "currentColor",
  fontStyle,
  fontWeight,
  size = "lg",
  style,
  textAlign,
  textDecoration,
  textTransform,
  truncate,
  lineClamp,
}: TextProps) {
  const classNames = [
    as === "label" ? `label-${size}` : `body-${size}`,
    color && `text-${color}`,
    textAlign && `text-${textAlign}`,
    textDecoration && `text-${textDecoration}`,
    textTransform && `text-${textTransform}`,
    fontStyle && `font-${fontStyle}`,
    fontWeight && `font-${fontWeight}`,
    truncate && "text-truncate",
    lineClamp && `line-clamp-${lineClamp}`,
    className && className,

  ]
    .filter(Boolean)
    .join(" ");

  const props: React.HTMLProps<HTMLElement> = {
    className: classNames,
    style,
    "aria-label": ariaLabel,
    role: as,
  };

  return React.createElement(as, props, children);
}
