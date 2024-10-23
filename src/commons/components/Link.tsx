import {Colors, FontWeight, Sizes} from "../types/core-types";
import {Link} from "react-router-dom";
import {CSSProperties} from "react";

interface AnchorProps {
    to: string;
    color?: Colors;
    size?: Sizes;
    onClick?: () => void;
    children?: React.ReactNode;
    fontWeight?: FontWeight,
    textDecoration?: CSSProperties["textDecoration"];
}

export default function AppLink({
                                 color = "primary",
                                 to,
                                 size = "md",
                                 onClick,
                                 children,
                                 fontWeight,
    textDecoration='none'
                             }: AnchorProps) {
    const classNames = [
        `ee-anchor`,
        color && `text-${color}`,
        size && `body-${size}`,
        fontWeight && `font-${fontWeight}`,
        textDecoration && `text-${textDecoration}`,
    ].filter(Boolean).join(" ");

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link
            to={to}
            className={classNames}
            onClick={handleClick}>
            {children}
        </Link>
    );
}
