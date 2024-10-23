import {AbstractBaseService} from "../ensue-react-system/utilities/base-service";
import {HttpClient} from "../ensue-react-system/http/http-client";
import {ApiEndPointUriProvider} from "../ensue-react-system/http/http-types";
import {Cart} from "../commons/models";

export class OrderService extends AbstractBaseService<Cart> {
    protected __model: Cart = new Cart();

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

    public async removeItem(orderId: number, productId: number): Promise<boolean> {
        return this.__client.delete(`${this.__url}/${orderId}/product/${productId}`);
    }
}
