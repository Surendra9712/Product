import { HttpClient } from "../ensue-react-system/http/http-client";
import  axios from "axios";
import { UriProvider } from "./utilities/uri-provider";
import {HttpResponseInterceptor} from "./utilities/response-interceptor";
import {ProductService} from "../api-services/product-service";
import {OrderService} from "../api-services/order-service";
const uriProvider = new UriProvider();

export const httpClient = new HttpClient(axios);
// export const appStorage = new EnsueStorage("ensueMarketplace");
// export const appSession = new EnsueSession(appStorage, "authUser", new User(), "authToken");

// const httpRequestInterceptor = new HttpRequestInterceptor(appSession);
// httpClient.setRequestInterceptor(httpRequestInterceptor);
/**
 * Error interceptor for handling error
* */
 // const httpErrorInterceptor = new HttpErrorInterceptor(appSession);
// httpClient.setResponseErrorInterceptor(httpErrorInterceptor);

const httpResponseInterceptor = new HttpResponseInterceptor();
httpClient.setResponseInterceptor(httpResponseInterceptor);

/**** API Caller Services Instances ******/

export const productService = new ProductService(httpClient, uriProvider );
export const cartService = new OrderService(httpClient, uriProvider );
