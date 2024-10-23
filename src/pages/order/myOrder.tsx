import SetPageTitle from "../../hook/setPageTitle";
import Title from "../../commons/components/Title";
import React, {useEffect, useState} from "react";
import {Collection} from "../../ensue-react-system/utilities/collection";
import {Cart} from "../../commons/models";
import {OrderStatusEnum} from "../../commons/enum";
import {IconTrash} from "../../commons/components/icons/icons";
import {useNavigate} from "react-router-dom";
import {Colors} from "../../commons/types/core-types";

export default function MyOrder() {
    SetPageTitle('My Orders');
    const [orders, setOrders] = useState<Cart[]>([]);
    const [isDialogOpen,setDialogOpen] = useState(false);
    const navigate = useNavigate();

    const pillColor: { [key: number]: Colors } = {
        0: 'danger',
        2: 'warning',
        3: 'success'
    }

    return (
        <>
            {/*<AppContainer>*/}
            {/*    <AppConfirmationDialog isOpen={isDialogOpen}*/}
            {/*                           title={"Cancel Order"}*/}
            {/*                           message={'Are you sure you want to  cancel this order?'}*/}
            {/*                           close={()=>setDialogOpen(false)}*/}
            {/*                           confirm={() =>console.log('confirm')}/>*/}
            {/*    <AppBox flexDirection='column' className='page-wrapper gap-lg'>*/}
            {/*        <Title as="h2">My Orders</Title>*/}
            {/*        {orders && orders.length ? orders.map((item, index) => (*/}
            {/*                <AppPaper shadow={'xs'} padding={'sm'} key={item.id}>*/}
            {/*                    <AppBorderBox border={['Bottom']} pb={'xs'}>*/}
            {/*                        <AppBox className="flex-max-xs-column" justifyContent='between' gap={'2xs'}>*/}
            {/*                            <AppBox gap={'3xs'}>*/}
            {/*                                <AppText as={'span'} size={'lg'}>Order Date:</AppText>*/}
            {/*                                <AppDate date={item.createdAt}></AppDate>*/}
            {/*                            </AppBox>*/}
            {/*                            <AppBox justifyContent={'between'} gap="xs">*/}
            {/*                                <AppPill withBorder color={pillColor[item.status]}*/}
            {/*                                         label={OrderStatusEnum[item.status]}/>*/}
            {/*                                <AppBox gap='xs'>*/}
            {/*                                    {item.status === OrderStatusEnum.Pending && <AppButton*/}
            {/*                                        size={'sm'}*/}
            {/*                                        color={'danger'}*/}
            {/*                                        variant={'outline'}*/}
            {/*                                        label="Cancel"*/}
            {/*                                        onClick={()=>setDialogOpen(true)}*/}
            {/*                                    />}*/}
            {/*                                    <AppIconButton*/}
            {/*                                        variant={'subtle'} size={'sm'}*/}
            {/*                                        color={'danger'}*/}
            {/*                                        onClick={()=>setDialogOpen(true)}*/}
            {/*                                        icon={IconTrash}/>*/}
            {/*                                </AppBox>*/}
            {/*                            </AppBox>*/}
            {/*                        </AppBox>*/}
            {/*                    </AppBorderBox>*/}
            {/*                    <AppGridBox gap={'sm'} mt={'sm'} style={{*/}
            {/*                        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))'*/}
            {/*                    }}>*/}
            {/*                        {item.products.map((product) => (*/}
            {/*                            <AppBox p={'xs'} gap={'xs'} key={product.id} className='surface-200 radius-sm'>*/}
            {/*                                <AppBox displayBlock className="max-w-16 flex-basis-2/5">*/}
            {/*                                    <img src={product.thumbnailUrl} alt={product.title}*/}
            {/*                                         className="w-full radius-sm"/>*/}
            {/*                                </AppBox>*/}
            {/*                                <AppBox flexDirection={'column'} gap={'3xs'}>*/}
            {/*                                    <AppTitle as={'h6'} lineClamp={2}>{product.title}</AppTitle>*/}
            {/*                                    <AppTitle as={'h6'}>{product.currency}{product.price}</AppTitle>*/}
            {/*                                </AppBox>*/}
            {/*                            </AppBox>*/}
            {/*                        ))}*/}
            {/*                    </AppGridBox>*/}
            {/*                    <AppBox gap={'xs'} justifyContent={'end'} p={'2xs'} alignItems='center' className="">*/}
            {/*                        <AppTitle as='h6'>Grand Total:</AppTitle>*/}
            {/*                        <AppTitle as='h6'>{item.products[0].currency}{item.totalPrice}</AppTitle>*/}
            {/*                    </AppBox>*/}
            {/*                </AppPaper>*/}
            {/*            ))*/}
            {/*            : <AppEmptyState/>}*/}
            {/*    </AppBox>*/}
            {/*</AppContainer>*/}
        </>
    )
}