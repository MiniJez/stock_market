import { Asset } from "../entities/Asset";
import { RequireAtLeastOne } from "../utils";

export interface AssetsRepository {
    getAllAsset(): Promise<Asset[]>;
    getAssetWithFilters(filter: RequireAtLeastOne<Asset>): Promise<Asset[]>;
    createAsset(operation: Asset): Promise<Asset>;
    updateAsset(id: string, operation: Asset): Promise<Asset | null>;
    deleteAsset(id: string): Promise<Asset | null>;
}