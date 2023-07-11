import { OperationRepository } from "../../interfaces/repositories/OperationRepository";

export const deleteOperationUC = (repository: OperationRepository) => {
    return {
        execute: async (id: string) => {
            return await repository.deleteOperation(id);
        },
    };
}