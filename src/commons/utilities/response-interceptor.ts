import {
    AxiosResponse,
} from "axios";
import {IHttpResponseInterceptor} from "../../system/http/http-types";
import {PaginatedCollection} from "../../system/utilities/paginated-collection";
import {Collection} from "../../system/utilities/collection";

export class HttpResponseInterceptor implements IHttpResponseInterceptor {
    public intercept(response: AxiosResponse) {
        if (!response) {
            return;
        }
        if (response.data.data.docs) {
            return new PaginatedCollection(response.data.data);
        } else if (Array.isArray(response.data)) {
            return new Collection(response.data);
        } else {
            return response.data.data;
        }
    }
}
