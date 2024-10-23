import  axios from "axios";
import { UriProvider } from "./utilities/uri-provider";
import {HttpResponseInterceptor} from "./utilities/response-interceptor";
import {ProductService} from "../api-services/product-service";
import {OrderService} from "../api-services/order-service";
import {HttpClient} from "../system/http/http-client";
const uriProvider = new UriProvider();

export const httpClient = new HttpClient(axios);

const httpResponseInterceptor = new HttpResponseInterceptor();
httpClient.setResponseInterceptor(httpResponseInterceptor);

/**** API Caller Services Instances ******/

export const productService = new ProductService(httpClient, uriProvider );
export const cartService = new OrderService(httpClient, uriProvider );
