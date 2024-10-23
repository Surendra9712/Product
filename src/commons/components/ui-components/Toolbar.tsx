import {AppContainer, AppLink, AppTitle} from "..";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {setCartItem} from "../../../redux/slices/cartSlice";
import {cartService} from "../../index";
import CartButton from "./CartButton";

export default function Toolbar() {
    const navigate = useNavigate();
    const [itemCount, setItemCount] = useState<number>();
    const dispatch = useDispatch<AppDispatch>();

    const cartProducts = useSelector((state: RootState) => state.cart.item);

    useEffect(() => {
        cartService.initializeCart().then(item => {
            if (item) {
                cartService.getCartItems(item._id).then(res => {
                    dispatch(setCartItem(res));
                })
            }
        })
    }, []);
    useEffect(() => {
        if (cartProducts) {
            setItemCount(cartProducts.items.length);
            dispatch(setCartItem(cartProducts));
        }
    }, [cartProducts]);

    return (
        <header className="py-sm  bg-filled color-primary">
            <AppContainer>
                <div className="flex justify-between">
                    <AppLink to={''} size={'2xl'} fontWeight={'bold'} color='light'>My Shop</AppLink>
                    <CartButton count={itemCount}/>
                </div>
            </AppContainer>
        </header>
    );
}