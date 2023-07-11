import { AssetPrice } from "../entities/AssetPrice";
import { RequireAtLeastOne } from "../utils";

export interface AssetsPricesRepository {
    getAllAssetsPrice(): Promise<AssetPrice[]>;
    getAssetsPriceWithFilters(filter: RequireAtLeastOne<AssetPrice>): Promise<AssetPrice[]>;
    createAssetPrice(operation: AssetPrice): Promise<AssetPrice>;
    updateAssetPrice(id: string, operation: AssetPrice): Promise<AssetPrice | null>;
    deleteAssetPrice(id: string): Promise<AssetPrice | null>;
}