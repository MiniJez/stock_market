import { AssetPrice } from "../../domain/interfaces/entities/AssetPrice";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { AssetsPricesRepository } from "../../domain/interfaces/repositories/AssetsPriceRepository";
import { AssetsPriceDS } from "../interfaces/datasources/AssetsPriceDS";

export class AssetsPriceRepositoryImpl implements AssetsPricesRepository {
    dataSource: AssetsPriceDS;

    constructor(dataSource: AssetsPriceDS) {
        this.dataSource = dataSource;
    }

    async getAllAssetsPrice() {
        return await this.dataSource.get({});
    }

    async getAssetsPriceWithFilters(filter: RequireAtLeastOne<AssetPrice>) {
        return await this.dataSource.get(filter);
    }

    async createAssetPrice(assetsPrice: AssetPrice) {
        return await this.dataSource.create(assetsPrice);
    }

    async updateAssetPrice(id: string, assetsPrice: AssetPrice) {
        return await this.dataSource.update(id, assetsPrice);
    }

    async deleteAssetPrice(id: string) {
        return await this.dataSource.delete(id);
    }
}