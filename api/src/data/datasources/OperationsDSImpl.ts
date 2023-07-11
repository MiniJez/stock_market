import { Operation } from "../../domain/interfaces/entities/Operation";
import { RequireAtLeastOne } from "../../domain/interfaces/utils";
import { DataBaseWrapper } from "../../domain/interfaces/wrappers/DataBaseWrapper";
import { OperationsDS } from "../interfaces/datasources/OperationsDS";

const getOperation = (operation: any): Operation => ({
	id: operation.id,
	assetId: operation.assetId,
	type: operation.type,
	quantity: operation.quantity,
	price: operation.price,
	date: operation.date,
});

export class OperationsDSImpl implements OperationsDS {
	db: DataBaseWrapper;

	constructor(db: DataBaseWrapper) {
		this.db = db;
	}

	async get(filter: RequireAtLeastOne<Operation> | {}): Promise<Operation[]> {
		const operations = await this.db.find(filter);
		return operations.length > 0
			? operations.map((operation: any) => {
					return getOperation(operation);
			  })
			: [];
	}

	async create(operation: Operation): Promise<Operation> {
		const newOperation = await this.db.create(operation);
		return getOperation(newOperation);
	}

	async update(id: string, operation: Operation): Promise<Operation | null> {
		const updatedOperation = await this.db.update(id, operation);
		return updatedOperation ? getOperation(updatedOperation) : null;
	}

	async delete(id: string): Promise<Operation | null> {
		const deletedOperation = await this.db.delete(id);
		return deletedOperation ? getOperation(deletedOperation) : null;
	}
}
