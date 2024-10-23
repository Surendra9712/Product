import React, {Fragment} from 'react';
import {IconStarEmpty, IconStarFill, IconStarFillHalf} from "../icons/icons";

interface AppRatingProps {
    value: number;
}

export default function AppRating({value}: AppRatingProps) {
    const getRatingIcon = (index: number): React.ReactNode => {
        const ceilValue = Math.ceil(value);
        const decimalPart = value % 1;
        if (index < ceilValue) {
            return IconStarFill;
        } else if (index === ceilValue) {
            return decimalPart === 0.5 ? IconStarFillHalf : IconStarFill;
        } else {
            return IconStarEmpty;
        }
    };

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => (
                <span className="w-2" key={index}>
                    {getRatingIcon(index)}
                </span>
            ))}
        </div>
    );
};
