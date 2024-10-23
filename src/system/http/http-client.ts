import { Axios } from "axios";
import { IHttpRequest, IHttpRequestInterceptor, IHttpResponseInterceptor } from "./http-types";
import { HttpRequest } from "./http-request";

export class HttpClient {
    private __httpRequestInterceptor?: IHttpRequestInterceptor;
    private __httpResponseInterceptor?: IHttpResponseInterceptor;
    public constructor(protected axios: Axios) {

    }

    public request(httpRequest: IHttpRequest): Promise<any> {
        if(this.__httpRequestInterceptor) {
            this.__httpRequestInterceptor.intercept(httpRequest);
        }
        return this.axios.request({
            baseURL: httpRequest.uri,
            headers: httpRequest.headers?.getHeaders(),
            params: httpRequest.queryParams?.getParams(),
            method: httpRequest.method,
            data: httpRequest.body,
        }).then(value => {
            if(this.__httpResponseInterceptor) {
                return this.__httpResponseInterceptor.intercept(value);
            }
            return value;
        }).catch(err => {
            throw err;
        });
    }


    public setResponseInterceptor(interceptor: IHttpResponseInterceptor): HttpClient {
        this.__httpResponseInterceptor = interceptor;
        return this;
    }

    public get(uri: string, queryParams?: QueryParams, headers?: HttpHeaders): Promise<any> {

        return this.request(new HttpRequest('get', uri, null, queryParams, headers));
    }

    public post (uri: string, body: any, queryParams?: QueryParams, headers?: HttpHeaders): Promise<any> {
        return this.request(new HttpRequest('post', uri, body,  queryParams, headers));
    }

    public put (uri: string, body: any, queryParams?: QueryParams, headers?: HttpHeaders): Promise<any> {
        return this.request(new HttpRequest('put', uri, body,  queryParams, headers));
    }

    public patch (uri: string, body: any, queryParams?: QueryParams, headers?: HttpHeaders): Promise<any> {
        return this.request(new HttpRequest('patch', uri, body,  queryParams, headers));
    }

    public delete(uri: string, queryParams?: QueryParams, headers?: HttpHeaders): Promise<any> {
        return this.request(new HttpRequest('delete', uri, null,  queryParams, headers));
    }
}


export class QueryParams {
    private __params: {[key: string]: string|number|boolean} = {};

    public set(key: string, value: string|number|boolean) {
        this.__params[key] = value;
        return this;
    }

    public get(key: string): string|number|boolean|undefined {
        return this.__params[key]
    }

    public getParams(): {[key: string]: string|number|boolean} {
        return this.__params;
    }
}

export class HttpHeaders {
    private __headers: {[key: string]: string} = {};


    public get(key: string): string|undefined {
        return this.__headers[key]
    }

    public getHeaders(): {[key: string] : string} {
        return this.__headers;
    }
}

