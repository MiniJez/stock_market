import { AssetsRepository } from "../../interfaces/repositories/AssetsRepository";

export const getAllAssetsUC = (repository: AssetsRepository) => {
	return {
		execute: async () => {
			return await repository.getAllAsset();
		},
	};
};
