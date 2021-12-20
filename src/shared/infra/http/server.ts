import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import createConnection from "@shared/infra/typeorm";
import "@shared/container";

import swaggerFile from "../../../swagger.json";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";

createConnection();

const options: cors.CorsOptions = {
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
};

const app = express();

app.use(cors(options));

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal Server Error - ${err.message}`,
        });
    }
);

app.listen(5000, () => console.log("Server Start"));
