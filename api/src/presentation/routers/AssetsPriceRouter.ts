import express, { Request, Response, NextFunction } from "express";
import { handleSuccess } from "../middlewares/SuccessMiddleware";
import { HttpStatus } from "../../domain/helpers/HttpStatusCode";
import { ErrorEntityTypes } from "../../domain/helpers/Error/ErrorEntityType";
import { handleMongoDbError } from "../../domain/helpers/Error/MongoErrorHandler";
import { useCases } from "../../domain/usecases";
import { ErrorHandler } from "../../domain/helpers/Error/ErrorHandler";

const router = express.Router();

router.get(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetPrice = await useCases.getAllAssetsPrice.execute();
            handleSuccess(res, assetPrice);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_PRICE));
        }
    }
);

router.post(
    "/filter",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetPrice = await useCases.getAssetsPriceWithFilters.execute(req.body);
            handleSuccess(res, assetPrice);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_PRICE));
        }
    }
);

router.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetPrice = await useCases.createAssetPrice.execute(req.body);
            handleSuccess(res, assetPrice);
            return next();
        } catch (err) {
            console.log(err)
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_PRICE));
        }
    }
);

router.put(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetPrice = await useCases.updateAssetPrice.execute(
                req.params.id,
                req.body
            );
            if (!assetPrice) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "AssetPrice not found"));
            }
            handleSuccess(res, assetPrice);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_PRICE));
        }
    }
);

router.delete(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetPrice = await useCases.deleteAssetPrice.execute(req.params.id);
            if (!assetPrice) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "AssetPrice not found"));
            }
            handleSuccess(res, assetPrice);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_PRICE));
        }
    }
);

export default router;
