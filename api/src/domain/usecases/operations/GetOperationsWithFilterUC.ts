import { Operation } from "../../interfaces/entities/Operation";
import { OperationsRepository } from "../../interfaces/repositories/OperationsRepository";
import { RequireAtLeastOne } from "../../interfaces/utils";

export const getOperationsWithFilterUC = (repository: OperationsRepository) => {
    return {
        execute: async (filter: RequireAtLeastOne<Operation>) => {
            return await repository.getOperationsWithFilters(filter);
        },
    };
}