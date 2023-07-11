import { AssetsPriceRepositoryImpl } from "../../../data/repositories/AssetsPriceRepositoryImpl";
import { AssetPrice } from "../../interfaces/entities/AssetPrice";

export const updateAssetPriceUC = (repository: AssetsPriceRepositoryImpl) => {
	return {
		execute: async (id: string, assetPrice: AssetPrice) => {
			return await repository.updateAssetPrice(id, assetPrice);
		},
	};
};
