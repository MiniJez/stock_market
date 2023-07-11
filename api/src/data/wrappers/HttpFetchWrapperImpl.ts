import { HttpFetcherWrapper } from "../../domain/interfaces/wrappers/HttpFetcherWrapper";

export class HttpFetcherWrapperImpl implements HttpFetcherWrapper {
	fetcher: HttpFetcherWrapper;

	constructor(fetcher: HttpFetcherWrapper) {
		this.fetcher = fetcher;
	}

	setHeaderOption(name: string, value: string): void {
        this.fetcher.setHeaderOption(value, name);
    }

	setToken(token: string): void {
		this.fetcher.setToken(token);
	}

	async get(url: string, token?: string): Promise<any> {
		return this.fetcher.get(url, token);
	}

	async post(url: string, data: any, token?: string): Promise<any> {
		return this.fetcher.post(url, data, token);
	}

	async put(url: string, data: any, token?: string): Promise<any> {
		return this.fetcher.put(url, data, token);
	}

	async delete(url: string, token?: string): Promise<any> {
		return this.fetcher.delete(url, token);
	}
}
