import {IColorVariants} from "../../commons/models";

export default function ColorVariant({variants}: { variants: IColorVariants[] }) {
    return (
        <div className="flex gap-3xs">
            {variants.length && variants.map((variant) => (
                <span key={variant._id} className="border p-2xs radius-sm">{variant.color.name}</span>
            ))}
        </div>
    )
}