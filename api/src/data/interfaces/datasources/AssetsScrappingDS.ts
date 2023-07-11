import { AssetScrapping } from "../../../domain/interfaces/entities/AssetScrapping";
import { RequireAtLeastOne } from "../../../domain/interfaces/utils";

export interface AssetsScrappingDS {
    get(filter: RequireAtLeastOne<AssetScrapping> | {}): Promise<AssetScrapping[]>;
    create(assetPrice: AssetScrapping): Promise<AssetScrapping>;
    update(id: string, assetPrice: AssetScrapping): Promise<AssetScrapping | null>;
    delete(id: string): Promise<AssetScrapping | null>;
}
