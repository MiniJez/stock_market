import { AssetsDSImpl } from "../../data/datasources/AssetsDSImpl";
import { OperationsDSImpl } from "../../data/datasources/OperationsDSImpl";
import { MongoDataBaseWrapperImpl } from "../../data/wrappers/db/MongoDataBaseWrapperImpl";
import {
	AssetsModel,
	AssetsPriceModel,
	AssetsScrappingModel,
	OperationsModel,
} from "../../data/wrappers/db/MongoSchemasModels";
import { AssetsRepositoryImpl } from "../../data/repositories/AssetsRepositoryImpl";
import { OperationsRepositoryImpl } from "../../data/repositories/OperationsRepositoryImpl";
import { DataBaseWrapperImpl } from "../../data/wrappers/DataBaseWrapperImpl";
import { createAssetUC } from "./assets/CreateAssetUC";
import { deleteAssetUC } from "./assets/DeleteAssetUC";
import { getAllAssetsUC } from "./assets/GetAllAssetsUC";
import { getAssetsWithFilterUC } from "./assets/GetAssetsWithFilterUC";
import { updateAssetUC } from "./assets/UpdateAsssetUC";
import { createOperationUC } from "./operations/CreateOperationUC";
import { deleteOperationUC } from "./operations/DeleteOperationUC";
import { getAllOperationsUC } from "./operations/GetAllOperationsUC";
import { getOperationsWithFilterUC } from "./operations/GetOperationsWithFilterUC";
import { updateOperationUC } from "./operations/UpdateOperationUC";
import { getAllAssetsPriceUC } from "./assetsPrice/GetAllAssetsPriceUC";
import { AssetsPriceRepositoryImpl } from "../../data/repositories/AssetsPriceRepositoryImpl";
import { AssetsPriceDSImpl } from "../../data/datasources/AssetsPriceDSImpl";
import { createAssetPriceUC } from "./assetsPrice/CreateAssetPriceUC";
import { getAssetsPriceWithFilterUC } from "./assetsPrice/GetAssetsPriceWithFilterUC";
import { updateAssetPriceUC } from "./assetsPrice/UpdateAsssetPriceUC";
import { deleteAssetPriceUC } from "./assetsPrice/DeleteAssetPriceUC";
import { getAllAssetsScrappingUC } from "./assetsScrapping/GetAllAssetsScrappingUC";
import { AssetsScrappingRepositoryImpl } from "../../data/repositories/AssetsScrappingRepositoryImpl";
import { AssetsScrappingDSImpl } from "../../data/datasources/AssetsScrappingDSImpl";
import { getAssetsScrappingWithFilterUC } from "./assetsScrapping/GetAssetsScrappingWithFilterUC";
import { createAssetScrappingUC } from "./assetsScrapping/CreateAssetScrappingUC";
import { updateAssetScrappingUC } from "./assetsScrapping/UpdateAsssetScrappingUC";
import { deleteAssetScrappingUC } from "./assetsScrapping/DeleteAssetScrappingUC";

export const useCases = {
	getAllOperations: getAllOperationsUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(OperationsModel)
				)
			)
		)
	),
	getOperationsWithFilters: getOperationsWithFilterUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(OperationsModel)
				)
			)
		)
	),
	createOperation: createOperationUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(OperationsModel)
				)
			)
		)
	),
	updateOperation: updateOperationUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(OperationsModel)
				)
			)
		)
	),
	deleteOperation: deleteOperationUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(OperationsModel)
				)
			)
		)
	),

	getAllAssets: getAllAssetsUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsModel)
				)
			)
		)
	),
	getAssetsWithFilters: getAssetsWithFilterUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsModel)
				)
			)
		)
	),
	createAsset: createAssetUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsModel)
				)
			)
		)
	),
	updateAsset: updateAssetUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsModel)
				)
			)
		)
	),
	deleteAsset: deleteAssetUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsModel)
				)
			)
		)
	),

	getAllAssetsPrice: getAllAssetsPriceUC(
		new AssetsPriceRepositoryImpl(
			new AssetsPriceDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsPriceModel)
				)
			)
		)
	),
	getAssetsPriceWithFilters: getAssetsPriceWithFilterUC(
		new AssetsPriceRepositoryImpl(
			new AssetsPriceDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsPriceModel)
				)
			)
		)
	),
	createAssetPrice: createAssetPriceUC(
		new AssetsPriceRepositoryImpl(
			new AssetsPriceDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsPriceModel)
				)
			)
		)
	),
	updateAssetPrice: updateAssetPriceUC(
		new AssetsPriceRepositoryImpl(
			new AssetsPriceDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsPriceModel)
				)
			)
		)
	),
	deleteAssetPrice: deleteAssetPriceUC(
		new AssetsPriceRepositoryImpl(
			new AssetsPriceDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsPriceModel)
				)
			)
		)
	),

	getAllAssetsScrapping: getAllAssetsScrappingUC(
		new AssetsScrappingRepositoryImpl(
			new AssetsScrappingDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsScrappingModel)
				)
			)
		)
	),
	getAssetsScrappingWithFilters: getAssetsScrappingWithFilterUC(
		new AssetsScrappingRepositoryImpl(
			new AssetsScrappingDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsScrappingModel)
				)
			)
		)
	),
	createAssetScrapping: createAssetScrappingUC(
		new AssetsScrappingRepositoryImpl(
			new AssetsScrappingDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsScrappingModel)
				)
			)
		)
	),
	updateAssetScrapping: updateAssetScrappingUC(
		new AssetsScrappingRepositoryImpl(
			new AssetsScrappingDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsScrappingModel)
				)
			)
		)
	),
	deleteAssetScrapping: deleteAssetScrappingUC(
		new AssetsScrappingRepositoryImpl(
			new AssetsScrappingDSImpl(
				new DataBaseWrapperImpl(
					new MongoDataBaseWrapperImpl(AssetsScrappingModel)
				)
			)
		)
	),
};
