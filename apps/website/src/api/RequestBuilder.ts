import { AppException, AppResponse } from '@app/api';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export enum RequestMethod {
    Get = 'get',
    Post = 'post',
}
export interface RequestParam {
    key: string;
    val: string;
}

export class RequestBuilder {
    private urlField: string[] = [];
    private configQueryParams: RequestParam[] = [];
    private body: unknown = {};
    private requestMethod: RequestMethod = RequestMethod.Get;
    private configData: AxiosRequestConfig = {};
    constructor(baseUrl: string) {
        this.urlField.push(baseUrl);
    }
    url(url: string, ...additionalURL: string[]): RequestBuilder {
        this.urlField.push(url);
        for (const additionUrl of additionalURL) {
            this.urlField.push(additionUrl);
        }
        return this;
    }
    config<Key extends keyof AxiosRequestConfig>(
        key: Key,
        value: AxiosRequestConfig[Key]
    ): this {
        this.configData[key] = value;
        return this;
    }
    setConfig(config: AxiosRequestConfig): this {
        this.configData = config;
        return this;
    }
    addHeader(headers: AxiosRequestConfig['headers']): this {
        this.configData = {
            ...this.configData,
            headers: { ...this.configData.headers, ...headers },
        };
        return this;
    }
    queryParams(params: Record<string, string>): this {
        for (const [key, val] of Object.entries(params)) {
            this.configQueryParams.push({
                key: encodeURIComponent(key),
                val: encodeURIComponent(val),
            });
        }
        return this;
    }
    queryParam(key: string, val: string): this {
        this.configQueryParams.push({ key, val });
        return this;
    }
    payload(payload: any): this {
        this.body = payload;
        return this;
    }
    setMethod(method: RequestMethod): this {
        this.requestMethod = method;
        return this;
    }
    async build<T>(): Promise<AppResponse<T> | AppException> {
        return axios(this.buildConfig())
            .then(convertResponse)
            .catch(convertError);
    }
    async buildForm(form: FormData) {
        return axios
            .post(this.buildUrl(), form, this.configData)
            .then(convertResponse)
            .catch(convertError);
    }

    private buildConfig(): AxiosRequestConfig {
        const config = {
            method: this.requestMethod,
            url: this.buildUrl(),
            data: this.body ?? null,
            ...this.configData,
        };
        return config;
    }
    private buildUrl(): string {
        let url: string = this.urlField.join('/');
        const params: string = this.configQueryParams
            .map((param) => `${param.key}=${param.val}`)
            .join('&');

        if (params) url += '?' + params;
        return url;
    }
}
function convertResponse(response: AxiosResponse<any, unknown>): AppResponse {
    const status = response.status;
    return { ...response.data, status, isOk: isOk(status) };
}
function convertError(error: AxiosError<any>): AppException {
    const status = error.response?.status ?? 404;
    return { ...error.response, message: error.message, status, isOk: false };
}
function isOk(status: number): boolean {
    return status < 300;
}
