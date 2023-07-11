import { Asset } from "../entities/Asset";
import { RequireAtLeastOne } from "../utils";

export interface AssetsRepository {
    getAllAssets(): Promise<Asset[]>;
    getAssetsWithFilters(filter: RequireAtLeastOne<Asset>): Promise<Asset[]>;
    createAsset(operation: Asset): Promise<Asset>;
    updateAsset(id: string, operation: Asset): Promise<Asset | null>;
    deleteAsset(id: string): Promise<Asset | null>;
}