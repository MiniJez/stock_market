import { OperationRepository } from "../../interfaces/repositories/OperationRepository";

export const getAllOperationsUC = (repository: OperationRepository) => {
    return {
        execute: async () => {
            return await repository.getAllOperations();
        },
    };
}