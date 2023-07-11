import { AssetsPriceRepositoryImpl } from "../../../data/repositories/AssetsPriceRepositoryImpl";

export const getAllAssetsPriceUC = (repository: AssetsPriceRepositoryImpl) => {
	return {
		execute: async () => {
			return await repository.getAllAssetsPrice();
		},
	};
};

