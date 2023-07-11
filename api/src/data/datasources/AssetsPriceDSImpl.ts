import { AssetPrice } from "../../domain/interfaces/entities/AssetPrice";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { DataBaseWrapper } from "../../domain/interfaces/wrappers/DataBaseWrapper";
import { AssetsPriceDS } from "../interfaces/datasources/AssetsPriceDS";

const getAssetPrice = (assetPrice: any): AssetPrice => ({
	id: assetPrice.id,
	assetId: assetPrice.assetId,
	price: assetPrice.price,
	date: assetPrice.date,
});

export class AssetsPriceDSImpl implements AssetsPriceDS {
	db: DataBaseWrapper;

	constructor(db: DataBaseWrapper) {
		this.db = db;
	}

	async get(
		filter: RequireAtLeastOne<AssetPrice> | {}
	): Promise<AssetPrice[]> {
		const assetPrices = await this.db.find(filter);
		return assetPrices.length > 0
			? assetPrices.map((assetPrice: any) => {
					return getAssetPrice(assetPrice);
			  })
			: [];
	}

	async create(assetPrice: AssetPrice): Promise<AssetPrice> {
		const newAssetPrice = await this.db.create(assetPrice);
		return getAssetPrice(newAssetPrice);
	}

	async update(
		id: string,
		assetPrice: AssetPrice
	): Promise<AssetPrice | null> {
		const updatedAssetPrice = await this.db.update(id, assetPrice);
		return updatedAssetPrice ? getAssetPrice(updatedAssetPrice) : null;
	}

	async delete(id: string): Promise<AssetPrice | null> {
		const deletedAssetPrice = await this.db.delete(id);
		return deletedAssetPrice ? getAssetPrice(deletedAssetPrice) : null;
	}
}
