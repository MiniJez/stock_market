import { NextFunction, Request, Response } from "express";

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
	const { statusCode, message } = err;
	res.status(statusCode).json({
		status: "error",
		statusCode,
		message,
	});
};
