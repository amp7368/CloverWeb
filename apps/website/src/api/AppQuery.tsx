import { RequestBuilder, RequestMethod } from './RequestBuilder';
import { environment } from '../environments/environment.dev';

export class AppQuery {
    request(url: string): RequestBuilder {
        return new RequestBuilder(`${environment.apiUrl}/${url}`);
    }
    get(url: string): RequestBuilder {
        return this.request(url).setMethod(RequestMethod.Get);
    }
    post(url: string): RequestBuilder {
        return this.request(url).setMethod(RequestMethod.Post);
    }
}
