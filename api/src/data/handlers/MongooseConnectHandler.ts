import mongoose from "mongoose";

export class MongooseConnectionHandler {
	dbUri: string;

	constructor(dbUri: string) {
		this.dbUri = dbUri;
	}

	connect = async () => {
        try {
            let res = await mongoose.connect(this.dbUri, {});
            console.log(`Connected to MongoDB: ${res.connection.host}`);
            this.handler();
        } catch (err) {
            console.log(`Failed to connect to MongoDB: ${err}`);
        }
	};

    handler = () => {
        mongoose.connection.on("error", (err) => {
			console.log(`Lost MongoDB connection with error: ${err.message}`);
            this.connect();
		});

		mongoose.connection.on("disconnected", () => {
            console.log("MongoDB disconnected");
            this.connect();
        });
    }
}
