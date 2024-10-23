import {BaseModel} from "../../../ensue-react-system/utilities/base-model";
import {ICart} from "./i-cart";
import {Product} from "../product/product";

export class Cart extends BaseModel implements ICart {
    _id: string = '';
    createdAt: string = '';
    deliveryAddress: string = '';
    deliveryCharge: number = 0;
    isDeleted: boolean = false;
    items: any = [];
    orderId: string = '';
    orderStatus: string = '';
    paymentMethod: string = '';
    paymentStatus: string = '';
    subTotal: number = 0;
    totalAmount: number = 0;
    updatedAt: string = '';
    voucherAmount: number = 0;
    voucherCode: string = '';

    public constructor(props: { [key: string]: any } | undefined = undefined) {
        super(props);
        this.__init(props);
    }


}