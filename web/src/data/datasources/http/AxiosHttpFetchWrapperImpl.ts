import axios, { AxiosInstance } from "axios";
import { HttpFetcherWrapper } from "../../../domain/interfaces/wrappers/HttpFetcherWrapper";
import { HttpResponse } from "../../../domain/interfaces/utils";

export class AxiosHttpWrapperImpl implements HttpFetcherWrapper {
    private static instance: AxiosHttpWrapperImpl;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create();
    }

    static getInstance(): AxiosHttpWrapperImpl {
        if (!AxiosHttpWrapperImpl.instance) {
            AxiosHttpWrapperImpl.instance = new AxiosHttpWrapperImpl();
        }

        return AxiosHttpWrapperImpl.instance;
    }

    setHeaderOption(name: string, value: string): void {
        this.axiosInstance.defaults.headers[name] = value;
    }

    setToken(token: string): void {
        this.axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    async get(url: string): Promise<HttpResponse> {
        return await this.axiosInstance.get(url);
    }

    async post(url: string, data: any): Promise<HttpResponse> {
        return await this.axiosInstance.post(url, data);
    }

    async put(url: string, data: any): Promise<HttpResponse> {
        return await this.axiosInstance.put(url, data);
    }

    async delete(url: string): Promise<HttpResponse> {
        return await this.axiosInstance.delete(url);
    }
}
