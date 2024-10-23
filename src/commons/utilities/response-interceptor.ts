import {
    AxiosResponse,
} from "axios";
import {IHttpResponseInterceptor} from "../../ensue-react-system/http/http-types";
import {Collection} from "../../ensue-react-system/utilities/collection";
import {PaginatedCollection} from "../../ensue-react-system/utilities/paginated-collection";

export class HttpResponseInterceptor implements IHttpResponseInterceptor {
    public intercept(response: AxiosResponse) {
        if (!response) {
            return;
        }
        // The response body for paginated collection is in {data: [], page: 1, perPage:
        // The response body for paginated collection is in {data: [], page: 1, perPage: 10,...} format.
        // Therefore, we are transforming the response body into paginated collection
        if (response.data.data.docs) {
            return new PaginatedCollection(response.data.data);
        } else if (Array.isArray(response.data)) {
            // The response body is simply an array []
            // Therefore, we are transforming the body to a utility collection class
            // since most of the collection in our app will be manipulated using the Collection class
            return new Collection(response.data);
        } else {
            // The response is everything else but the collection.
            // Here a response could be simply a json object or null or undefined or empty
            return response.data.data;
        }
    }
}
