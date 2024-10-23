import {IconCartPlus} from "../icons/icons";
import {Link} from "react-router-dom";

export default function CartButton({
                                       count
                                   }: { count?: number }) {
    return (<Link
        className='btn btn-icon bg-filled color-primary size-lg radius-rounded relative cursor-pointer'
        to={'/cart'}>
        {IconCartPlus}
        {count ? <span
            className={'absolute bottom-2/4 left-3/5 cart-count bg-filled color-danger radius-rounded h-3 w-3 text-center flex align-items-center justify-center body-sm'}>{count}</span> : null}
    </Link>)
}