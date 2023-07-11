import { AssetsDSImpl } from "../../data/datasources/AssetsDSImpl";
import { AxiosHttpWrapperImpl } from "../../data/datasources/http/AxiosHttpFetchWrapperImpl";
import { OperationsDSImpl } from "../../data/datasources/OperationsDSImpl";
import { AssetsRepositoryImpl } from "../../data/repositories/AssetsRepositoryImpl";
import { OperationsRepositoryImpl } from "../../data/repositories/OperationsRepositoryImpl";
import { HttpFetcherWrapperImpl } from "../../data/wrappers/HttpFetchWrapperImpl";
import { createAssetUC } from "./assets/CreateAssetUC";
import { deleteAssetUC } from "./assets/DeleteAssetUC";
import { getAllAssetsUC } from "./assets/GetAllAssetsUC";
import { getAssetsWithFilterUC } from "./assets/GetAssetsWithFilterUC";
import { updateAssetUC } from "./assets/UpdateAsssetUC";
import { createOperationUC } from "./operations/CreateOperationUC";
import { deleteOperationUC } from "./operations/DeleteOperationUC";
import { getAllOperationsUC } from "./operations/GetAllOperationsUC";
import { getOperationsWithFilterUC } from "./operations/GetOperationsWithFilterUC copy";
import { updateOperationUC } from "./operations/UpdateOperationUC";

export const useCases = {
	getAllOperations: getAllOperationsUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	getOperationsWithFilters: getOperationsWithFilterUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	createOperation: createOperationUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	updateOperation: updateOperationUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	deleteOperation: deleteOperationUC(
		new OperationsRepositoryImpl(
			new OperationsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),

	getAllAssets: getAllAssetsUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	getAssetsWithFilters: getAssetsWithFilterUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	createAsset: createAssetUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	updateAsset: updateAssetUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
	deleteAsset: deleteAssetUC(
		new AssetsRepositoryImpl(
			new AssetsDSImpl(
				new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())
			)
		)
	),
};
