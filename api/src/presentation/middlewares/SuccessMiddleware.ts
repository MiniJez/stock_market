import { Response } from "express";
import { HttpStatus } from "../../domain/helpers/HttpStatusCode";

export function handleSuccess(res: Response, data: any, message: string = "Success", statusCode: number = HttpStatus.OK) {
    res.status(statusCode).json({
        status: "success",
        statusCode,
        message,
        data,
    });
}