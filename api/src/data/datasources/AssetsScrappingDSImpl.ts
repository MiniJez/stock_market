import { AssetScrapping } from "../../domain/interfaces/entities/AssetScrapping";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { DataBaseWrapper } from "../../domain/interfaces/wrappers/DataBaseWrapper";
import { AssetsScrappingDS } from "../interfaces/datasources/AssetsScrappingDS";

const getAssetScrapping = (assetScrapping: any): AssetScrapping => ({
	id: assetScrapping.id,
	assetId: assetScrapping.assetId,
	querySelector: assetScrapping.querySelector,
	url: assetScrapping.url,
});

export class AssetsScrappingDSImpl implements AssetsScrappingDS {
	db: DataBaseWrapper;

	constructor(db: DataBaseWrapper) {
		this.db = db;
	}

	async get(
		filter: RequireAtLeastOne<AssetScrapping> | {}
	): Promise<AssetScrapping[]> {
		const assetScrappings = await this.db.find(filter);
		return assetScrappings.length > 0
			? assetScrappings.map((assetScrapping: any) => {
					return getAssetScrapping(assetScrapping);
			  })
			: [];
	}

	async create(assetScrapping: AssetScrapping): Promise<AssetScrapping> {
		const newAssetScrapping = await this.db.create(assetScrapping);
		return getAssetScrapping(newAssetScrapping);
	}

	async update(
		id: string,
		assetScrapping: AssetScrapping
	): Promise<AssetScrapping | null> {
		const updatedAssetScrapping = await this.db.update(id, assetScrapping);
		return updatedAssetScrapping ? getAssetScrapping(updatedAssetScrapping) : null;
	}

	async delete(id: string): Promise<AssetScrapping | null> {
		const deletedAssetScrapping = await this.db.delete(id);
		return deletedAssetScrapping ? getAssetScrapping(deletedAssetScrapping) : null;
	}
}
