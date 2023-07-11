import mongoose, { Schema } from "mongoose";
import { DataBaseWrapper } from "../../../domain/interfaces/wrappers/DataBaseWrapper";

export class MongoDataBaseWrapperImpl implements DataBaseWrapper {
    model: mongoose.Model<any & mongoose.Document>;

    constructor(model: mongoose.Model<any & mongoose.Document>) {
        this.model = model;
    }

    async find(filter: any): Promise<any[]> {
        return await this.model.find(filter);
    }

    async create(data: any): Promise<any> {
        return await this.model.create(data);
    }

    async update(id: string, data: any): Promise<any | null> {
        return await this.model.find({ id }).updateOne(data)
    }

    async delete(id: string): Promise<any | null> {
        return await this.model.find({ id }).deleteOne();
    }
}