import { AssetsRepository } from "../../interfaces/repositories/AssetsRepository";

export const deleteAssetUC = (repository: AssetsRepository) => {
	return {
		execute: async (id: string) => {
			return await repository.deleteAsset(id);
		},
	};
};
