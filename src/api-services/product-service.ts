import {Product} from "../commons/models";
import {AbstractBaseService} from "../system/utilities/base-service";
import {HttpClient, QueryParams} from "../system/http/http-client";
import {ApiEndPointUriProvider} from "../system/http/http-types";
import {PaginatedCollection} from "../system/utilities/paginated-collection";

export class ProductService extends AbstractBaseService {

    public constructor(__client: HttpClient, __endpointProvider: ApiEndPointUriProvider) {
        super(__client, __endpointProvider);
    }

    public getResourceName(): string {
        return "product";
    }

    public getProducts(params?: QueryParams): Promise<PaginatedCollection<Product>> {
        return this.__client.get(`${this.__url}/latest`, params);
    }

    public getProductDetails(slug: string): Promise<Product> {
        return this.__client.get(`${this.__url}/for-public/${slug}`);
    }
}
