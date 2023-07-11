import { AssetsPriceRepositoryImpl } from "../../../data/repositories/AssetsPriceRepositoryImpl";

export const deleteAssetPriceUC = (repository: AssetsPriceRepositoryImpl) => {
	return {
		execute: async (id: string) => {
			return await repository.deleteAssetPrice(id);
		},
	};
};
