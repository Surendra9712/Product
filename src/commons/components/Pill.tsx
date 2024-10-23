import React, {ReactNode} from "react";
import {Colors, Radius} from "../types/core-types";
import {AppText} from "./index";

interface PillProps {
    label: string;
    icon?: ReactNode;
    color?: Colors;
    radius?: Radius;
    withBorder?: boolean;
    variant?: "solid" | "outline" | "translucent";
}

export default function Pill({
                                 label,
                                 icon,
                                 variant = 'translucent',
                                 color = "primary",
                                 radius = 'rounded',
                                 withBorder = false
                             }: PillProps) {
    const classNames = [
        `pill flex justify-center align-items-center gap-3xh`,
        color && `color-${color}`,
        `pill-${variant}`,
        `radius-${radius}`,
        withBorder && `with-border`,
    ]
        .filter(Boolean)
        .join(" ");
    return (
        <div className={classNames}>
            {icon && icon}
            <AppText size="md"> {label}</AppText>
        </div>
    );
}
