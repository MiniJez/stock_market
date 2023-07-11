import { AssetsPriceRepositoryImpl } from "../../../data/repositories/AssetsPriceRepositoryImpl";
import { AssetPrice } from "../../interfaces/entities/AssetPrice";
import { RequireAtLeastOne } from "../../interfaces/utils";

export const getAssetsPriceWithFilterUC = (repository: AssetsPriceRepositoryImpl) => {
	return {
		execute: async (filter: RequireAtLeastOne<AssetPrice>) => {
			return await repository.getAssetsPriceWithFilters(filter);
		},
	};
};