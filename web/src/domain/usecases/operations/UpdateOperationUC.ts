import { Operation } from "../../interfaces/entities/Operation";
import { OperationRepository } from "../../interfaces/repositories/OperationRepository";

export const updateOperationUC = (repository: OperationRepository) => {
    return {
        execute: async (id: string, operation: Operation) => {
            return await repository.updateOperation(id, operation);
        },
    };
}