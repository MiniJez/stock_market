import { Asset } from "../../domain/interfaces/entities/Asset";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { DataBaseWrapper } from "../../domain/interfaces/wrappers/DataBaseWrapper";
import { AssetsDS } from "../interfaces/datasources/AssetsDS";

const getAsset = (asset: any): Asset => ({
	id: asset.id,
	name: asset.name,
	symbol: asset.symbol,
	type: asset.type,
	category: asset.category,
});

export class AssetsDSImpl implements AssetsDS {
	db: DataBaseWrapper;

	constructor(db: DataBaseWrapper) {
		this.db = db;
	}

	async get(
		filter: RequireAtLeastOne<Asset> | {}
	): Promise<Asset[]> {
		const assets = await this.db.find(filter);
		return assets.length > 0
			? assets.map((asset: any) => {
					return getAsset(asset);
			  })
			: [];
	}

	async create(asset: Asset): Promise<Asset> {
		const newAsset = await this.db.create(asset);
		return getAsset(newAsset);
	}

	async update(
		id: string,
		asset: Asset
	): Promise<Asset | null> {
		const updatedAsset = await this.db.update(id, asset);
		return updatedAsset ? getAsset(updatedAsset) : null;
	}

	async delete(id: string): Promise<Asset | null> {
		const deletedAsset = await this.db.delete(id);
		return deletedAsset ? getAsset(deletedAsset) : null;
	}
}
