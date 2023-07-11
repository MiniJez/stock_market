import { Asset } from "../../../domain/interfaces/entities/Asset";
import { RequireAtLeastOne } from "../../../domain/interfaces/utils";

export interface AssetsDS {
    get(filter: RequireAtLeastOne<Asset> | {}): Promise<Asset[]>;
    create(asset: Asset): Promise<Asset>;
    update(id: string, asset: Asset): Promise<Asset | null>;
    delete(id: string): Promise<Asset | null>;
}
