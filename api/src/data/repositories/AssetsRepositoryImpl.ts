import { AssetsDS } from "../interfaces/datasources/AssetsDS";
import { AssetsRepository } from "../../domain/interfaces/repositories/AssetsRepository";
import { Asset } from "../../domain/interfaces/entities/Asset";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";

export class AssetsRepositoryImpl implements AssetsRepository {
    dataSource: AssetsDS;

    constructor(dataSource: AssetsDS) {
        this.dataSource = dataSource;
    }

    async getAllAssets() {
        return await this.dataSource.get({});
    }

    async getAssetsWithFilters(filter: RequireAtLeastOne<Asset>) {
        return await this.dataSource.get(filter);
    }

    async createAsset(assets: Asset) {
        return await this.dataSource.create(assets);
    }

    async updateAsset(id: string, assets: Asset) {
        return await this.dataSource.update(id, assets);
    }

    async deleteAsset(id: string) {
        return await this.dataSource.delete(id);
    }
}