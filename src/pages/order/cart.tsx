import {
    AppContainer, AppEmptyState,
} from "../../commons/components";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import setPageTitle from "../../hook/setPageTitle";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import isNullOrUndefined from "../../commons/utilities/null-or-undefined";
import CartTable from "./cartTable";
import Title from "../../commons/components/Title";

export default function Cart() {
    setPageTitle('Cart');
    const cartItem = useSelector((state: RootState) => state.cart.item);
    const navigate = useNavigate();
    const [step,setStep] = useState<number>();

    return (
        null
        // <AppBox displayBlock className='cart-page'>
        //     <AppDivider/>
        //     <AppContainer>
        //         <AppBox flexDirection='column' className='page-wrapper gap-md-lg'>
        //             <Title as="h2">Cart</Title>
        //             {cartItem && cartItem.products.length ?
        //                 <AppBox gap='sm' className={`flex-column flex-md-row align-items-max-md-center justify-center`}>
        //                     {step === 0 && <AppBox displayBlock className='flex-1'>
        //                         <CartTable cartItem={cartItem}/>
        //                     </AppBox>}
        //                     <AppPaper className='right-section'>
        //                         <Checkout onProceed={(e) => setStep(e)} price={cartItem.totalPrice} currency={cartItem.products[0].currency}/>
        //                     </AppPaper>
        //                 </AppBox> :
        //                 <AppEmptyState type={'cart'}/>}
        //         </AppBox>
        //     </AppContainer>
        // </AppBox>
    )
}