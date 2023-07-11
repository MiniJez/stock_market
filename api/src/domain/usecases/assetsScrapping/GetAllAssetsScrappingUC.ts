import { AssetsScrappingRepository } from "../../interfaces/repositories/AssetsScrappingRepository";

export const getAllAssetsScrappingUC = (repository: AssetsScrappingRepository) => {
	return {
		execute: async () => {
			return await repository.getAllAssetsScrapping();
		},
	};
};
