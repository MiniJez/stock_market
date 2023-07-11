import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { MongooseConnectionHandler } from "./data/handlers/MongooseConnectHandler";
import cors from "cors";
import { handleError } from "./presentation/middlewares/ErrorMiddleware";

import operationsRouter from "./presentation/routers/OperationsRouter";
import assetsRouter from "./presentation/routers/AssetsRouter";
import assetsPriceRouter from "./presentation/routers/AssetsPriceRouter";
import assetsScrappingRouter from "./presentation/routers/AssetsScrappingRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const mongooseConnectionHandler = new MongooseConnectionHandler("mongodb://localhost:27017/stock_market");
mongooseConnectionHandler.connect();

app.use(express.json());
app.use(cors());

app.use("/operations", operationsRouter);
app.use("/assets", assetsRouter);
app.use("/assets-price", assetsPriceRouter);
app.use("/assets-scrapping", assetsScrappingRouter);

app.use(handleError);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
