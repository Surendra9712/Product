import {AbstractBaseService} from "../ensue-react-system/utilities/base-service";
import {HttpClient, QueryParams} from "../ensue-react-system/http/http-client";
import {ApiEndPointUriProvider} from "../ensue-react-system/http/http-types";
import {Product} from "../commons/models";
import {Collection} from "../ensue-react-system/utilities/collection";

export class ProductService extends AbstractBaseService<Product> {
    protected __model: Product = new Product();

    public constructor(__client: HttpClient, __endpointProvider: ApiEndPointUriProvider) {
        super(__client, __endpointProvider);
    }

    public getResourceName(): string {
        return "product";
    }

    public getProducts(params?:QueryParams):Promise<Collection<Product>> {
        return this.__client.get(`${this.__url}/latest`,params);
    }
    public getProductDetails(slug:string):Promise<Product> {
        return this.__client.get(`${this.__url}/for-public/${slug}`);
    }
}
