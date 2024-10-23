import React, { CSSProperties, ReactNode } from "react";

type ContainerWidth = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
  size?: ContainerWidth;
  style?: CSSProperties | undefined;
}

export default function Container({
  className,
  children,
  style,
  size = "lg",
}: ContainerProps) {
  return (
    <div className={`container ${className ? className : ""}`} style={style}>
      {children}
    </div>
  );
}
