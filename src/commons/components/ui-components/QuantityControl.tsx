import {AppText} from "../index";
import {IconMinus, IconPlus} from "../icons/icons";
import {useEffect, useState} from "react";

interface ButtonProps {
    disabled?: boolean;
    change: (value: number) => void;
    withBorder?: boolean,
    value?: number
}

export default function QuantityControl({change, disabled, withBorder = true, value}: ButtonProps) {
    const [quantity, setQuantity] = useState(value ?? 1);
    const handleMinus = () => {
        setQuantity((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0);
    }

    const handlePlus = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    useEffect(() => {
        change(quantity)
    }, [quantity]);

    return (
        <>
            <div
                className={`flex align-items-center qty-control-btn h-5 ${disabled ? 'disabled' : ''} ${withBorder ? 'with-border' : ''}`}>
                <button className='btn h-full px-2xs' onClick={handleMinus}>{IconMinus}</button>
                <AppText fontWeight='semibold' className='w-3 text-center'>{quantity}</AppText>
                <button className='btn h-full px-2xs' onClick={handlePlus}>{IconPlus}</button>
            </div>
        </>
    )
}