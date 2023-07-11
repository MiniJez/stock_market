import mongoose, { Schema } from "mongoose";
import {
	Operation,
	OperationType,
} from "../../../domain/interfaces/entities/Operation";
import {
	Asset,
	AssetCategory,
	AssetType,
} from "../../../domain/interfaces/entities/Asset";
import { AssetPrice } from "../../../domain/interfaces/entities/AssetPrice";
import { AssetScrapping } from "../../../domain/interfaces/entities/AssetScrapping";

const OperationsSchema = new Schema<Operation>({
	id: {
		type: String,
		required: true,
	},
	assetId: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: [...Object.values(OperationType)],
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

export const OperationsModel = mongoose.model<Operation & mongoose.Document>(
	"operations",
	OperationsSchema
);

const AssetsSchema = new Schema<Asset>({
	id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	symbol: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: [...Object.values(AssetType)],
		required: true,
	},
	category: {
		type: String,
		enum: [...Object.values(AssetCategory)],
		required: true,
	},
});

export const AssetsModel = mongoose.model<Asset & mongoose.Document>(
	"assets",
	AssetsSchema
);

const AssetPriceSchema = new Schema<AssetPrice>({
	id: {
		type: String,
		required: true,
	},
	assetId: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

export const AssetsPriceModel = mongoose.model<AssetPrice & mongoose.Document>(
	"assets_prices",
	AssetPriceSchema
);

const AssetScrappingSchema = new Schema<AssetScrapping>({
	id: {
		type: String,
		required: true,
	},
	assetId: {
		type: String,
		required: true,
	},
	querySelector: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});

export const AssetsScrappingModel = mongoose.model<
	AssetScrapping & mongoose.Document
>("assets_scrappings", AssetScrappingSchema);