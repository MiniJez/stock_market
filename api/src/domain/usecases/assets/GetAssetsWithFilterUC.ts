import { Asset } from "../../interfaces/entities/Asset";
import { AssetsRepository } from "../../interfaces/repositories/AssetsRepository";
import { RequireAtLeastOne } from "../../interfaces/utils";

export const getAssetsWithFilterUC = (repository: AssetsRepository) => {
	return {
		execute: async (filter: RequireAtLeastOne<Asset>) => {
			return await repository.getAssetsWithFilters(filter);
		},
	};
};
