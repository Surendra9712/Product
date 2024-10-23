import { HttpHeaders, QueryParams } from "./http-client";
import { IHttpRequest } from "./http-types";

export class HttpRequest implements IHttpRequest {
    constructor(public method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'head', public uri: string, public body?: any, public queryParams?: QueryParams, public headers?: HttpHeaders) {
       if (!queryParams) {
        this.queryParams = new QueryParams();
       }
       if (!this.headers) {
        this.headers = new HttpHeaders();
       }
    }
}