import {ICartProduct} from "./i-cart-product";
export class Cart {
    _id: string = '';
    createdAt: string = '';
    deliveryAddress: string = '';
    deliveryCharge: number = 0;
    isDeleted: boolean = false;
    items: ICartProduct[] = [];
    orderId: string = '';
    orderStatus: string = '';
    paymentMethod: string = '';
    paymentStatus: string = '';
    subTotal: number = 0;
    totalAmount: number = 0;
    updatedAt: string = '';
    voucherAmount: number = 0;
    voucherCode: string = '';
}