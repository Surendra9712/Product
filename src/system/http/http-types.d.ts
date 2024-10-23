import { HttpHeaders, QueryParams } from "./http-client";

export interface IHttpRequest {
     method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'head';
     uri: string;
     queryParams?: QueryParams;
     headers?: HttpHeaders;
     body?: any,
}

export interface IHttpRequestInterceptor {
     intercept(request: IHttpRequest): void;
}

export interface IHttpResponseInterceptor {
     intercept(response: any): any;
}

export interface ApiEndPointUriProvider {
     provide(): string;
}