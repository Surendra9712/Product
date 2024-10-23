import {ISizeVariant} from "../../commons/models";

export default function SizeVariant({variants}: { variants: ISizeVariant[] }) {
    return (
        <div className="flex gap-3xs">
            {variants.length && variants.map((variant) => (
                <span key={variant._id} className="border p-2xs radius-sm">{variant.variantName}</span>
            ))}
        </div>
    )
}