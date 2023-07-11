import { Operation } from "../entities/Operation";
import { RequireAtLeastOne } from "../utils";

export interface OperationsRepository {
    getAllOperations(): Promise<Operation[]>;
    getOperationsWithFilter(filter: RequireAtLeastOne<Operation> | {}): Promise<Operation[]>;
    createOperation(operation: Operation): Promise<Operation>;
    updateOperation(id: string, operation: Operation): Promise<Operation | null>;
    deleteOperation(id: string): Promise<Operation | null>;
}