import { Operation } from "../../interfaces/entities/Operation";
import { OperationRepository } from "../../interfaces/repositories/OperationRepository";

export const createOperationUC = (repository: OperationRepository) => {
    return {
        execute: async (operation: Operation) => {
            return await repository.createOperation(operation);
        },
    };
}