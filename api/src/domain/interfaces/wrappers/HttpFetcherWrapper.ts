import { HttpResponse } from "../utils";

export interface HttpFetcherWrapper {
    setHeaderOption: (name: string, value: string) => void;
    setToken: (token: string) => void;
    get: (url: string, token?: string) => Promise<HttpResponse>;
    post: (url: string, data: any, token?: string) => Promise<HttpResponse>;
    put: (url: string, data: any, token?: string) => Promise<HttpResponse>;
    delete: (url: string, token?: string) => Promise<HttpResponse>;
}