import { AssetScrapping } from "../../interfaces/entities/AssetScrapping";
import { AssetsScrappingRepository } from "../../interfaces/repositories/AssetsScrappingRepository";
import { RequireAtLeastOne } from "../../interfaces/utils";

export const getAssetsScrappingWithFilterUC = (repository: AssetsScrappingRepository) => {
	return {
		execute: async (filter: RequireAtLeastOne<AssetScrapping>) => {
			return await repository.getAssetsScrappingWithFilters(filter);
		},
	};
};
