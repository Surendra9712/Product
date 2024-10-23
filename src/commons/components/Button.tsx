import {ReactNode} from "react";
import {Colors, Sizes} from "../types/core-types";

interface ButtonProps {
    color?: Colors;
    disabled?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    label: string;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    size?: Sizes;
    variant?: "filled" | "outline" | "light" | "subtle";
    onClick?: () => void,
    borderGray?: boolean,
    type?:'button' | 'submit' | 'reset'
}

export default function Button({
                                   color = "primary",
                                   disabled,
                                   label,
                                   leftSection,
                                   loading,
                                   fullWidth,
                                   rightSection,
                                   size = "md",
                                   variant = "filled",
                                   onClick,
                                   borderGray,
    type='button'
                               }: ButtonProps) {
    const classNames = [
        `btn`,
        variant && `btn-${variant}`,
        color && `color-${color}`,
        size && `size-${size}`,
        loading && `loading`,
        fullWidth && `w-full`,
        borderGray && `border-gray`
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            disabled={disabled}
            className={classNames}
            data-variant={variant}
            data-disabled={disabled}
            data-loading={loading}
            aria-label={label}
            aria-disabled={disabled} onClick={onClick}>
            {leftSection && leftSection}
            <span>{label}</span>
            {rightSection && rightSection}
        </button>
    );
}
