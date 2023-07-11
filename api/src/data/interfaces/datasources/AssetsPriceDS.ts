import { AssetPrice } from "../../../domain/interfaces/entities/AssetPrice";
import { RequireAtLeastOne } from "../../../domain/interfaces/utils";

export interface AssetsPriceDS {
    get(filter: RequireAtLeastOne<AssetPrice> | {}): Promise<AssetPrice[]>;
    create(assetPrice: AssetPrice): Promise<AssetPrice>;
    update(id: string, assetPrice: AssetPrice): Promise<AssetPrice | null>;
    delete(id: string): Promise<AssetPrice | null>;
}
