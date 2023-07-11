import { DataBaseWrapper } from "../../domain/interfaces/wrappers/DataBaseWrapper";

export class DataBaseWrapperImpl implements DataBaseWrapper {
    db: DataBaseWrapper;

    constructor(db: any) {
        this.db = db;
    }

    async find(filter: any): Promise<any[]> {
        return await this.db.find(filter);
    }

    async create(data: any): Promise<any> {
        return await this.db.create(data);
    }

    async update(id: string, data: any): Promise<any | null> {
        return await this.db.update(id, data);
    }

    async delete(id: string): Promise<any | null> {
        return await this.db.delete(id);
    }
}