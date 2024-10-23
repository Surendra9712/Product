import { HttpClient, HttpHeaders, QueryParams } from "../http/http-client";
import { HttpRequest } from "../http/http-request";
import { ApiEndPointUriProvider } from "../http/http-types";
import { BaseModel } from "./base-model";
import { Collection } from "./collection";

export abstract class AbstractBaseService<T extends BaseModel> {
    protected abstract __model: T;
    public constructor(protected __client: HttpClient, protected __endpointProvider: ApiEndPointUriProvider) {
    }
    public abstract getResourceName(): string;
  
    get __url(): string {
      return this.__endpointProvider.provide() + "/" + this.getResourceName();
    }
  
    public save(obj: T, urlParams?: {[key: string]:string|number|boolean}): Promise<T | undefined> {
      if (Object.hasOwn(obj, 'id') && (obj as any).id > 0) {
        return this.update((obj as any).id, obj, urlParams);
      }
      return this.create(obj,urlParams);
    }
    
    public request<Q,R>( uri: string = "", method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'head' = 'get', body: Q|null = null, urlParams: {[key: string]:string|number|boolean} | undefined = undefined, headers: HttpHeaders | undefined = undefined): Promise<R> {
      const request = new HttpRequest(method,uri,body, this.createHttpParamObject(urlParams), headers);
      return this.__client.request(request);
    }
    /**
     * Save the resource to the persistent location via web
     * @param object
     * @param urlParams
     */
    public create(object: T, urlParams?: {[key: string]:string|number|boolean}): Promise<T> {
      const options = this.createHttpParamObject(urlParams);
      return this.__client.post(this.__url, object,options).then(obj => this.__model.create(obj) as T);
    }
  
    /**
     * Find model for given id from web
     * @param id
     * @param urlParams
     */
    public find(id: number|string, urlParams?: {[key: string]:string|number|boolean}): Promise<T> {
      const options = this.createHttpParamObject(urlParams);
      return this.__client.get(this.__url+'/'+id, options).then(obj => this.__model.create(obj) as T);
    }
  
    public update(id: number|string, object: T, urlParams?: {[key: string]:string|number|boolean}): Promise<T | undefined> {
        const options = this.createHttpParamObject(urlParams);
      return this.__client.put(this.__url+'/'+id, object, options).then(obj => {
        if (obj) {
          return this.__model.create(obj) as T;
        }
        return undefined;
      });
    }
    public delete(id: number|string, urlParams?: {[key: string]:string|number|boolean}): Promise<undefined> {
      const options = this.createHttpParamObject(urlParams);
      return this.__client.delete(this.__url+'/'+id, options).then(_ => undefined);
    }
  
    public list(page?: number, urlParams?: {[key: string]:string|number|boolean}): Promise<T[] | Collection<T>> {
      if (page) {
        urlParams = urlParams || {};
        urlParams['page'] = page;
      }
      const options = this.createHttpParamObject(urlParams);
      return this.__client.get(this.__url, options).then(o => this.__model.createFromCollection(o) as T[]  | Collection<T>);
    }
  
  //@ts-ignore
    protected createHttpParamObject(urlParams: { [p: string]: string | number | boolean } | undefined) {
      const queryParams = new QueryParams();
      if (urlParams) {
        for (let key in urlParams) {
          queryParams.set(key, urlParams[key]);
        }
      }
      return queryParams;
    }
  }