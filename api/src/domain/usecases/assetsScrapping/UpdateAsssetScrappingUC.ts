import { AssetScrapping } from "../../interfaces/entities/AssetScrapping";
import { AssetsScrappingRepository } from "../../interfaces/repositories/AssetsScrappingRepository";

export const updateAssetScrappingUC = (repository: AssetsScrappingRepository) => {
	return {
		execute: async (id: string, asset: AssetScrapping) => {
			return await repository.updateAssetScrapping(id, asset);
		},
	};
};
