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
            const asset = await useCases.getAllAssets.execute();
            handleSuccess(res, asset);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET));
        }
    }
);

router.post(
    "/filter",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const asset = await useCases.getAssetsWithFilters.execute(req.body);
            handleSuccess(res, asset);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET));
        }
    }
);

router.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const asset = await useCases.createAsset.execute(req.body);
            handleSuccess(res, asset);
            return next();
        } catch (err) {
            console.log(err)
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET));
        }
    }
);

router.put(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const asset = await useCases.updateAsset.execute(
                req.params.id,
                req.body
            );
            if (!asset) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "Asset not found"));
            }
            handleSuccess(res, asset);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET));
        }
    }
);

router.delete(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const asset = await useCases.deleteAsset.execute(req.params.id);
            if (!asset) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "Asset not found"));
            }
            handleSuccess(res, asset);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.ASSET));
        }
    }
);

export default router;
