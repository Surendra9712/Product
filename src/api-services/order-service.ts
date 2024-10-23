import {Cart} from "../commons/models";
import {AbstractBaseService} from "../system/utilities/base-service";
import {HttpClient} from "../system/http/http-client";
import {ApiEndPointUriProvider} from "../system/http/http-types";

export class OrderService extends AbstractBaseService {
    public constructor(__client: HttpClient, __endpointProvider: ApiEndPointUriProvider) {
        super(__client, __endpointProvider);
    }

    public getResourceName(): string {
        return "order";
    }

    public addToCart(cartId: string, data: {
        product: string;
        quantity: number;
        variantType: string
    }) {
        return this.__client.post(`${this.__url}/add-item/${cartId}`, data);
    }

    public initializeCart(): Promise<Cart> {
        return this.__client.get(this.__url + '/user/new-cart');
    }

    public getCartItems(cartId:string): Promise<Cart> {
        return this.__client.get(`${this.__url}/user/cart-details/${cartId}`);
    }

    public updateQty(cartId:string,itemId:string,quantity:number): Promise<Cart> {
        return this.__client.put(`${this.__url}/update-item/${cartId}/${itemId}`,{quantity});
    }
}
