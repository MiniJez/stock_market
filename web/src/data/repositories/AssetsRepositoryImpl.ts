import { AssetsDS } from "../interfaces/datasources/AssetsDS";
import { AssetsRepository } from "../../domain/interfaces/repositories/AssetsRepository";
import { Asset } from "../../domain/interfaces/entities/Asset";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";

export class AssetsRepositoryImpl implements AssetsRepository {
    dataSource: AssetsDS;

    constructor(dataSource: AssetsDS) {
        this.dataSource = dataSource;
    }

    async getAllAsset() {
        return await this.dataSource.getAll();
    }

    async getAssetWithFilters(filter: RequireAtLeastOne<Asset>) {
        return await this.dataSource.getWithFilter(filter);
    }

    async createAsset(operation: Asset) {
        return await this.dataSource.create(operation);
    }

    async updateAsset(id: string, operation: Asset) {
        return await this.dataSource.update(id, operation);
    }

    async deleteAsset(id: string) {
        return await this.dataSource.delete(id);
    }
}