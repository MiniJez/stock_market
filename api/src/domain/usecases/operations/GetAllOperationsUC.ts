import { OperationsRepository } from "../../interfaces/repositories/OperationsRepository";

export const getAllOperationsUC = (repository: OperationsRepository) => {
    return {
        execute: async () => {
            return await repository.getAllOperations();
        },
    };
}