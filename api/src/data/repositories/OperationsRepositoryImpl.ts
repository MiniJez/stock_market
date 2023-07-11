import { OperationsRepository } from "../../domain/interfaces/repositories/OperationsRepository";
import { Operation } from "../../domain/interfaces/entities/Operation";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { OperationsDS } from "../interfaces/datasources/OperationsDS";

export class OperationsRepositoryImpl implements OperationsRepository {
	dbDataSource: OperationsDS;

	constructor(dbDataSource: OperationsDS) {
		this.dbDataSource = dbDataSource;
	}

	async getAllOperations() {
		return await this.dbDataSource.get({});
	}

	async getOperationsWithFilters(filter: RequireAtLeastOne<Operation>) {
		return await this.dbDataSource.get(filter);
	}

	async createOperation(operation: Operation) {
		return await this.dbDataSource.create(operation);
	}

	async updateOperation(id: string, operation: Operation) {
		return await this.dbDataSource.update(id, operation);
	}

	async deleteOperation(id: string) {
		return await this.dbDataSource.delete(id);
	}
}
