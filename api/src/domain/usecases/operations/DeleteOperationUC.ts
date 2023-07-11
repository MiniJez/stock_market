import { OperationsRepository } from "../../interfaces/repositories/OperationsRepository";

export const deleteOperationUC = (repository: OperationsRepository) => {
    return {
        execute: async (id: string) => {
            return await repository.deleteOperation(id);
        },
    };
}