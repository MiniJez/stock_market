import { Asset } from "../../interfaces/entities/Asset";
import { AssetsRepository } from "../../interfaces/repositories/AssetsRepository";

export const updateAssetUC = (repository: AssetsRepository) => {
	return {
		execute: async (id: string, asset: Asset) => {
			return await repository.updateAsset(id, asset);
		},
	};
};
