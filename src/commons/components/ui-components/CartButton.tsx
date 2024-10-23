import {IconCartPlus} from "../icons/icons";
interface BadgeProps {
    badgeCount?: number
    onClick?: () => void
}

export default function CartButton({
                                  badgeCount,
                                  onClick
                              }: BadgeProps) {
    return (<button
        className='p-xs radius-rounded relative'
        onClick={onClick}>
        {IconCartPlus}
        {badgeCount ? <span className={'absolute bottom-2/4 left-3/4 cart-count bg-filled color-primary radius-rounded h-3 w-3 text-center flex align-items-center justify-center body-sm'}>{badgeCount}</span> : null}
    </button>)
}