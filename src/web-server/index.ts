import express from "express";
import AppRouter from "./router.js";
import swaggerUI from "swagger-ui-express";
import { swaggerOptions } from "./config/swagger/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 5000;

console.log("APP port: ", process.env.APP_PORT);

export function runServer() {
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    // swagger
    const swaggerRoute = `/docs`;
    app.use(swaggerRoute, swaggerUI.serve, swaggerUI.setup(swaggerOptions));

    app.use(express.json());

    app.use(AppRouter);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
