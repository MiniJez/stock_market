import { Operation } from "../../interfaces/entities/Operation";
import { OperationsRepository } from "../../interfaces/repositories/OperationsRepository";

export const createOperationUC = (repository: OperationsRepository) => {
    return {
        execute: async (operation: Operation) => {
            return await repository.createOperation(operation);
        },
    };
}