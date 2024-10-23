import {
    AppButton, AppContainer, AppEmptyState, AppLink, AppText, AppTitle,
} from "../../commons/components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import useSetPageTitle from "../../hook/useSetPageTitle";
import QuantityControl from "../../commons/components/ui-components/QuantityControl";
import {Cart, ICartProduct} from "../../commons/models";
import {setCartItem} from "../../redux/slices/cartSlice";
import {cartService} from "../../commons";
import useSnackbarMethods from "../../hook/useSnackbarMethod";
import {useState} from "react";
import LabelValuePair from "./label-value-pair";

export default function CartPage() {
    useSetPageTitle('Cart');
    const cartItem = useSelector((state: RootState) => state.cart.item);
    const dispatch = useDispatch();
    const {showSuccessSnackbar} = useSnackbarMethods();
    const [loading, setLoading] = useState<string>('');

    const handleQuantityChange = (qty: number, item: ICartProduct) => {
        if (cartItem) {
            const updatedItems = cartItem.items.map(product => {
                if (product._id === item._id) {
                    const newSubTotal = Number((product.price * qty).toFixed(2));
                    return {
                        ...product,
                        quantity: qty,
                        subTotal: newSubTotal
                    };
                }
                return product;
            });

            const newCartSubTotal = updatedItems.reduce((total, product) => total + product.subTotal, 0);
            const newTotalAmount = newCartSubTotal + cartItem.deliveryCharge - cartItem.voucherAmount;

            const updatedCart = {
                ...cartItem,
                items: updatedItems,
                subTotal: newCartSubTotal,
                totalAmount: newTotalAmount
            } as Cart;

            dispatch(setCartItem(updatedCart));
        }
    };

    const handleUpdateQty = (itemId: string, qty: number) => {
        if (cartItem) {
            setLoading(itemId)
            cartService.updateQty(cartItem._id, itemId, qty).then(res => {
                setLoading('')
                showSuccessSnackbar({message: "Quantity updated successfully."})
            }).catch(_ => setLoading(''));
        }
    }

    return (
        <AppContainer>
            <div className='page-wrapper'>
                {cartItem && cartItem.items.length > 0 ? (
                    <div className="grid-row gap-md">
                        <div className="col-lg-8 col-md-7">
                            <div className="flex flex-column">
                                {cartItem.items.map((item,index) => <div key={item._id}
                                                                   className="flex gap-xs border-bottom py-sm">
                                    <div>
                                        <img src={item.product.images[0]} className='max-w-15'
                                             alt={item.product.title}/>
                                    </div>
                                    <div className="flex flex-column gap-xs">
                                        <AppLink fontWeight={'semibold'} size={'xl'}
                                                 to={'/product/' + item.product.slug}>
                                            {item.product.title}
                                        </AppLink>
                                        <div className="flex gap-sm">
                                            <AppText>${item.price}</AppText>
                                            <AppText>Sub Total: ${item.subTotal}</AppText>
                                        </div>
                                        <div className="flex gap-sm">
                                            <QuantityControl value={item.quantity}
                                                             change={(e) => handleQuantityChange(e, item)}/>
                                            <AppButton loading={loading===item._id} variant={'outline'} label={'Update'}
                                                       onClick={() => handleUpdateQty(item._id, item.quantity)}/>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="border radius-md overflow-hidden">
                                <div className="p-sm flex flex-column gap-sm">
                                    <LabelValuePair label={'Delivery Address'}
                                                    value={cartItem.deliveryAddress === "" ? "N/A" : cartItem.deliveryAddress}/>
                                    <LabelValuePair label={'Status'} value={cartItem.orderStatus}/>
                                    <LabelValuePair label={'Payment Method'} value={cartItem.paymentMethod}/>
                                    <LabelValuePair label={'Payment Status'} value={cartItem.paymentStatus}/>
                                    <LabelValuePair label={'Delivery Charge'} value={"$" + cartItem.deliveryCharge}/>
                                </div>
                                <div className="surface-200">
                                    <div className="grid-row py-xs px-sm">
                                        <div className="col-6">
                                            <AppTitle as={'h5'}>Sub Total</AppTitle>
                                        </div>
                                        <div className="col-6 text-right">
                                            <AppTitle as={'h5'}>${cartItem.subTotal}</AppTitle>
                                        </div>
                                    </div>
                                    <div className="grid-row border-top py-xs px-sm">
                                        <div className="col-6">
                                            <AppTitle as={'h5'}>Total</AppTitle>
                                        </div>
                                        <div className="col-6 text-right">
                                            <AppTitle as={'h5'}>${cartItem.totalAmount}</AppTitle>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <AppEmptyState type={'cart'}/>}
            </div>
        </AppContainer>
    )
}