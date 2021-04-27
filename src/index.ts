import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { join } from "path";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

const swaggerConfigPath = join(__dirname, "swagger.yml");
const swaggerDocument = YAML.load(swaggerConfigPath);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
