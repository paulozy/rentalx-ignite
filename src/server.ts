import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3001, () => console.log("Server is running"));
