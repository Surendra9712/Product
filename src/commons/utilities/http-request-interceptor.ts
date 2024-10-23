import { IHttpRequest, IHttpRequestInterceptor } from "../../ensue-react-system/http/http-types";
import { EnsueSession } from "../../ensue-react-system/utilities/ensue-session";

export class HttpRequestInterceptor implements IHttpRequestInterceptor {
    public constructor(private __session: EnsueSession) {

    }
    public intercept(request: IHttpRequest): void {
        const token = this.__session.getAccessToken();
        if (token === '' || token === undefined || token === null) return;

        request.headers?.setAuthBearerToken(token);
    }
    
}