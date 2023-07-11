import { AssetsPriceRepositoryImpl } from "../../../data/repositories/AssetsPriceRepositoryImpl";
import { AssetPrice } from "../../interfaces/entities/AssetPrice";

export const createAssetPriceUC = (repository: AssetsPriceRepositoryImpl) => {
	return {
		execute: async (assetPrice: AssetPrice) => {
			return await repository.createAssetPrice(assetPrice);
		},
	};
};
