import { HttpClient } from "../http/http-client";
import { ApiEndPointUriProvider } from "../http/http-types";

export abstract class AbstractBaseService {
    public constructor(protected __client: HttpClient, protected __endpointProvider: ApiEndPointUriProvider) {
    }
    public abstract getResourceName(): string;
  
    get __url(): string {
      return this.__endpointProvider.provide() + "/" + this.getResourceName();
    }
  }