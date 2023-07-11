import { Operation } from "../../../domain/interfaces/entities/Operation";
import { RequireAtLeastOne } from "../../../domain/interfaces/utils";

export interface OperationsDS {
    getAll(): Promise<Operation[]>;
    getWithFilter(filter: RequireAtLeastOne<Operation> | {}): Promise<Operation[]>;
    create(operation: Operation): Promise<Operation>;
    update(id: string, operation: Operation): Promise<Operation | null>;
    delete(id: string): Promise<Operation | null>;
}