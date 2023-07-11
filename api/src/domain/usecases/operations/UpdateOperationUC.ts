import { Operation } from "../../interfaces/entities/Operation";
import { OperationsRepository } from "../../interfaces/repositories/OperationsRepository";

export const updateOperationUC = (repository: OperationsRepository) => {
    return {
        execute: async (id: string, operation: Operation) => {
            return await repository.updateOperation(id, operation);
        },
    };
}