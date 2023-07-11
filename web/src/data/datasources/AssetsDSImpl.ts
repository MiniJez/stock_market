import { CONFIG } from "../../core/config";
import { Asset } from "../../domain/interfaces/entities/Asset";
import { RequireAtLeastOne, ResponseApiEntity, TypedResponse } from "../../domain/interfaces/utils";
import { HttpFetcherWrapper } from "../../domain/interfaces/wrappers/HttpFetcherWrapper";
import { AssetsDS } from "../interfaces/datasources/AssetsDS";

export class AssetsDSImpl implements AssetsDS {
	fetcher: HttpFetcherWrapper;
	baseUrl: string = CONFIG.API_URL + "/assets";

	constructor(fetcher: HttpFetcherWrapper) {
		this.fetcher = fetcher;
	}

	async getAll(): Promise<Asset[]> {
		const response: TypedResponse<ResponseApiEntity<Asset[]>> =
			await this.fetcher.get(`${this.baseUrl}`);

		const { data } = response.data;

		return data;
	}

	async getWithFilter(
		filter: RequireAtLeastOne<Asset> | {}
	): Promise<Asset[]> {
		const response: TypedResponse<ResponseApiEntity<Asset[]>> =
			await this.fetcher.post(`${this.baseUrl}/filter`, filter);

		const { data } = response.data;

		return data;
	}

	async create(operation: Asset): Promise<Asset> {
		const response: TypedResponse<ResponseApiEntity<Asset>> =
			await this.fetcher.post(`${this.baseUrl}`, operation);

		const { data } = response.data;

		return data;
	}

	async update(id: string, operation: Asset): Promise<Asset | null> {
		const response: TypedResponse<ResponseApiEntity<Asset>> =
			await this.fetcher.put(`${this.baseUrl}/${id}`, operation);

		const { data } = response.data;

		return data;
	}

	async delete(id: string): Promise<Asset | null> {
		const response: TypedResponse<ResponseApiEntity<Asset>> =
			await this.fetcher.delete(`${this.baseUrl}/${id}`);

		const { data } = response.data;

		return data;
	}
}
