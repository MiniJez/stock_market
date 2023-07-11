import { CONFIG } from "../../core/config";
import { Operation } from "../../domain/interfaces/entities/Operation";
import {
	RequireAtLeastOne,
	ResponseApiEntity,
	TypedResponse,
} from "../../domain/interfaces/utils";
import { HttpFetcherWrapper } from "../../domain/interfaces/wrappers/HttpFetcherWrapper";
import { OperationsDS } from "../interfaces/datasources/OperationsDS";

export class OperationsDSImpl implements OperationsDS {
	fetcher: HttpFetcherWrapper;
	baseUrl: string = CONFIG.API_URL + "/operations";

	constructor(fetcher: HttpFetcherWrapper) {
		this.fetcher = fetcher;
	}

	async getAll(): Promise<Operation[]> {
		const response: TypedResponse<ResponseApiEntity<Operation[]>> =
			await this.fetcher.get(`${this.baseUrl}`);

		const { data } = response.data;

		return data;
	}

	async getWithFilter(
		filter: RequireAtLeastOne<Operation> | {}
	): Promise<Operation[]> {
		const response: TypedResponse<ResponseApiEntity<Operation[]>> =
			await this.fetcher.post(`${this.baseUrl}/filter`, filter);

		const { data } = response.data;

		return data;
	}

	async create(operation: Operation): Promise<Operation> {
		const response: TypedResponse<ResponseApiEntity<Operation>> =
			await this.fetcher.post(`${this.baseUrl}`, operation);

		const { data } = response.data;

		return data;
	}

	async update(id: string, operation: Operation): Promise<Operation | null> {
		const response: TypedResponse<ResponseApiEntity<Operation>> =
			await this.fetcher.put(`${this.baseUrl}/${id}`, operation);

		const { data } = response.data;

		return data;
	}

	async delete(id: string): Promise<Operation | null> {
		const response: TypedResponse<ResponseApiEntity<Operation>> =
			await this.fetcher.delete(`${this.baseUrl}/${id}`);

		const { data } = response.data;

		return data;
	}
}
