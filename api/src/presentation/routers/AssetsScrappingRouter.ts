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
            const assetScrapping = await useCases.getAllAssetsScrapping.execute();
            handleSuccess(res, assetScrapping);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_SCRAPPING));
        }
    }
);

router.post(
    "/filter",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetScrapping = await useCases.getAssetsScrappingWithFilters.execute(req.body);
            handleSuccess(res, assetScrapping);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_SCRAPPING));
        }
    }
);

router.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetScrapping = await useCases.createAssetScrapping.execute(req.body);
            handleSuccess(res, assetScrapping);
            return next();
        } catch (err) {
            console.log(err)
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_SCRAPPING));
        }
    }
);

router.put(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetScrapping = await useCases.updateAssetScrapping.execute(
                req.params.id,
                req.body
            );
            if (!assetScrapping) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "AssetScrapping not found"));
            }
            handleSuccess(res, assetScrapping);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_SCRAPPING));
        }
    }
);

router.delete(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const assetScrapping = await useCases.deleteAssetScrapping.execute(req.params.id);
            if (!assetScrapping) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "AssetScrapping not found"));
            }
            handleSuccess(res, assetScrapping);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET_SCRAPPING));
        }
    }
);

export default router;
