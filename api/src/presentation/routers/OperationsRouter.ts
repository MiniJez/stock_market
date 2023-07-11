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
            const operation = await useCases.getAllOperations.execute();
            handleSuccess(res, operation);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.OPERATION));
        }
    }
);

router.post(
    "/filter",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operation = await useCases.getOperationsWithFilters.execute(req.body);
            handleSuccess(res, operation);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.OPERATION));
        }
    }
);

router.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operation = await useCases.createOperation.execute(req.body);
            handleSuccess(res, operation);
            return next();
        } catch (err) {
            console.log(err)
            next(handleMongoDbError(err, ErrorEntityTypes.OPERATION));
        }
    }
);

router.put(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operation = await useCases.updateOperation.execute(
                req.params.id,
                req.body
            );
            if (!operation) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "Operation not found"));
            }
            handleSuccess(res, operation);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.OPERATION));
        }
    }
);

router.delete(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operation = await useCases.deleteOperation.execute(req.params.id);
            if (!operation) {
                return next(new ErrorHandler(HttpStatus.NOT_FOUND, "Operation not found"));
            }
            handleSuccess(res, operation);
            return next();
        } catch (err) {
            next(handleMongoDbError(err, ErrorEntityTypes.OPERATION));
        }
    }
);

export default router;
