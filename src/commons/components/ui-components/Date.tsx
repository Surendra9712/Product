import moment from "moment";
import React from "react";

interface DateProps {
    date: string,
    format?: string,
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    classNames?: string,
}

export default function Date({date, format = "YYYY-MM-DD", as = 'span', classNames}: DateProps) {
    const dateStr = moment(date).format(format)
    const props: React.HTMLProps<HTMLElement> = {
        className: `${classNames ? classNames : ""} ${as}`,
    };
    return (
        React.createElement(as, props, dateStr)
    )
}