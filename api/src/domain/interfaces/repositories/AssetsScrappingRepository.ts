import { AssetScrapping } from "../entities/AssetScrapping";
import { RequireAtLeastOne } from "../utils";

export interface AssetsScrappingRepository {
    getAllAssetsScrapping(): Promise<AssetScrapping[]>;
    getAssetsScrappingWithFilters(filter: RequireAtLeastOne<AssetScrapping>): Promise<AssetScrapping[]>;
    createAssetScrapping(operation: AssetScrapping): Promise<AssetScrapping>;
    updateAssetScrapping(id: string, operation: AssetScrapping): Promise<AssetScrapping | null>;
    deleteAssetScrapping(id: string): Promise<AssetScrapping | null>;
}