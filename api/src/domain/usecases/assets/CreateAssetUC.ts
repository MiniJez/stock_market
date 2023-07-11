import { Asset } from "../../interfaces/entities/Asset";
import { AssetsRepository } from "../../interfaces/repositories/AssetsRepository";

export const createAssetUC = (repository: AssetsRepository) => {
	return {
		execute: async (asset: Asset) => {
			return await repository.createAsset(asset);
		},
	};
};
