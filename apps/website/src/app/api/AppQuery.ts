import { RequestBuilder, RequestMethod } from './RequestBuilder';

export class AppQuery {
    request(url: string): RequestBuilder {
        return new RequestBuilder(url);
    }
    get(url: string): RequestBuilder {
        return this.request(url).setMethod(RequestMethod.Get);
    }
    post(url: string): RequestBuilder {
        return this.request(url).setMethod(RequestMethod.Post);
    }
}
