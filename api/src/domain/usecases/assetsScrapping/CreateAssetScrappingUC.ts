import { AssetScrapping } from "../../interfaces/entities/AssetScrapping";
import { AssetsScrappingRepository } from "../../interfaces/repositories/AssetsScrappingRepository";

export const createAssetScrappingUC = (repository: AssetsScrappingRepository) => {
	return {
		execute: async (assetScrapping: AssetScrapping) => {
			return await repository.createAssetScrapping(assetScrapping);
		},
	};
};
