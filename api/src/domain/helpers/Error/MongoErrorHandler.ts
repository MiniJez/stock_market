import { HttpStatus } from "../HttpStatusCode";
import { ErrorEntityTypes } from "./ErrorEntityType";
import { ErrorHandler } from "./ErrorHandler";

export const handleMongoDbError = (err: any, type: ErrorEntityTypes) => {
	if (err?.code === 11000) {
		return new ErrorHandler(HttpStatus.BAD_REQUEST, `${type} already exists`);
	} else if (
		err instanceof TypeError &&
		err?.message?.includes("Cannot read property '_id'")
	) {
		return new ErrorHandler(HttpStatus.NOT_FOUND, `${type} not found`);
	} else if (
		err?.name === "CastError" &&
		err?.message?.includes("Cast to ObjectId failed")
	) {
		return new ErrorHandler(HttpStatus.BAD_REQUEST, `Invalid ${type} id format`);
	} else if (
		err?.name === "ValidationError" &&
		err?.message?.includes("is required")
	) {
		return new ErrorHandler(HttpStatus.BAD_REQUEST, `Missing ${type} fields`);
	} else {
		return new ErrorHandler(
			HttpStatus.INTERNAL_SERVER_ERROR,
			"Unable to process request"
		);
	}
};