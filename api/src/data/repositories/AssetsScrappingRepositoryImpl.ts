import { Asset } from "../../domain/interfaces/entities/Asset";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { AssetsScrappingRepository } from "../../domain/interfaces/repositories/AssetsScrappingRepository";
import { AssetsScrappingDS } from "../interfaces/datasources/AssetsScrappingDS";
import { AssetScrapping } from "../../domain/interfaces/entities/AssetScrapping";

export class AssetsScrappingRepositoryImpl implements AssetsScrappingRepository {
    dataSource: AssetsScrappingDS;

    constructor(dataSource: AssetsScrappingDS) {
        this.dataSource = dataSource;
    }

    async getAllAssetsScrapping() {
        return await this.dataSource.get({});
    }

    async getAssetsScrappingWithFilters(filter: RequireAtLeastOne<AssetScrapping>) {
        return await this.dataSource.get(filter);
    }

    async createAssetScrapping(assetScrapping: AssetScrapping) {
        return await this.dataSource.create(assetScrapping);
    }

    async updateAssetScrapping(id: string, assetScrapping: AssetScrapping) {
        return await this.dataSource.update(id, assetScrapping);
    }

    async deleteAssetScrapping(id: string) {
        return await this.dataSource.delete(id);
    }
}