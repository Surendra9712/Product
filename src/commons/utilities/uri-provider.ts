import { Environment } from "../../environments/environment";
import {ApiEndPointUriProvider} from "../../system/http/http-types";

export class UriProvider implements ApiEndPointUriProvider {
    public provide(): string {
        return Environment.baseUrl;
    }
    
}