import React, { ReactNode } from "react";
import {Colors, Radius, Sizes} from "../types/core-types";

interface IconButtonProps {
  icon: ReactNode;
  color?: Colors;
  disabled?: boolean;
  loading?: boolean;
  radius?: Radius;
  size?: Sizes;
  variant?: "filled" | "outline" | "light" | "subtle";
  borderLight?: boolean;
  onClick?: (e:React.MouseEvent) => void,
  className?:string
}

export default function IconButton({
  color = "primary",
  icon,
  disabled,
  loading,
  radius = "sm",
  size = "md",
  variant = "filled",
  borderLight = false,
    onClick,
    className
}: IconButtonProps) {
  const classNames = [
    `btn btn-icon`,
    variant && `btn-${variant}`,
    color && `color-${color}`,
    size && `size-${size}`,
    radius && `radius-${radius}`,
    borderLight && `border-light`,
    className && `${className}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      data-variant={variant}
      data-disabled={disabled}
      data-loading={loading}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {loading && <>laoding</>}
      {icon}
    </button>
  );
}
