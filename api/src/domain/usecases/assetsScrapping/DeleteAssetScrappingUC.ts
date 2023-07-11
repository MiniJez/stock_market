import { AssetsScrappingRepository } from "../../interfaces/repositories/AssetsScrappingRepository";

export const deleteAssetScrappingUC = (repository: AssetsScrappingRepository) => {
	return {
		execute: async (id: string) => {
			return await repository.deleteAssetScrapping(id);
		},
	};
};
