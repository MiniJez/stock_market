import { Operation } from "../../interfaces/entities/Operation";
import { OperationRepository } from "../../interfaces/repositories/OperationRepository";
import { RequireAtLeastOne } from "../../interfaces/utils";

export const getOperationsWithFilterUC = (repository: OperationRepository) => {
    return {
        execute: async (filter: RequireAtLeastOne<Operation>) => {
            return await repository.getOperationsWithFilters(filter);
        },
    };
}