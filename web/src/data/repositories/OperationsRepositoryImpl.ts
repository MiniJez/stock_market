import { Operation } from "../../domain/interfaces/entities/Operation";
import { OperationsRepository } from "../../domain/interfaces/repositories/OperationsRepository";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { OperationsDS } from "../interfaces/datasources/OperationsDS";

export class OperationsRepositoryImpl implements OperationsRepository {
    datasource: OperationsDS;

    constructor(datasource: OperationsDS) {
        this.datasource = datasource;
    }

    async getAllOperations() {
        return await this.datasource.getAll();
    }
    async getOperationsWithFilter(filter: RequireAtLeastOne<Operation> | {}) {
        return await this.datasource.getWithFilter(filter);
    }
    async createOperation(operation: Operation) {
        return await this.datasource.create(operation);
    }
    async updateOperation(id: string, operation: Operation) {
        return await this.datasource.update(id, operation);
    }
    async deleteOperation(id: string) {
        return await this.datasource.delete(id);
    }
}