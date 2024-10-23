import { ApiEndPointUriProvider } from "../../ensue-react-system/http/http-types";
import { Environment } from "../../environments/environment";

export class UriProvider implements ApiEndPointUriProvider {
    public provide(): string {
        return Environment.baseUrl;
    }
    
}