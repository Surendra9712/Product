import {AppIconButton} from "../../commons/components";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import QuantityControl from "../../commons/components/ui-components/QuantityControl";
import {cartService} from "../../commons";
import {removeCartItem} from "../../redux/slices/cartSlice";
import {ICart, IProduct} from "../../commons/models";
import {IconTrash} from "../../commons/components/icons/icons";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function CartTable({cartItem}: { cartItem: ICart }) {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleRemove = (e: React.MouseEvent, item: IProduct) => {
        e.preventDefault();
        e.stopPropagation();
        if (cartItem) {
            // cartService.removeItem(cartItem.id, item._id).then(_ => {
            //     dispatch(removeCartItem(item));
            // })
        }
    }
    return (
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {cartItem.products.map((item) => (
                <tr className='cursor-pointer' key={item._id} onClick={() => navigate('/product/' + item._id)}>
                    <td>
                        {/*<img src={item.thumbnailUrl} className='cart-image' alt='thumbnail'/>*/}
                    </td>
                    <td className={'break-word'}>{item.title}</td>
                    <td><QuantityControl disabled/></td>
                    <td>{item.price}</td>
                    <td className='text-right'>
                        <AppIconButton onClick={(e) => handleRemove(e, item)}
                                       variant={'subtle'} size={'sm'}
                                       color={'danger'}
                                       icon={IconTrash}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}