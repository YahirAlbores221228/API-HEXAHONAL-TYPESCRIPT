import "./shared/infrastructure/load-env-vars";
import bodyParser from "body-parser";
import express from "express";
import { config } from "./shared/infrastructure/config";
import { routes } from "./Producto/infrastructure/RouteProducto";


  const app = express();

  app.use(bodyParser.json());
app.use("/productito", routes);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - corriendo puerto ${port}`);
  });


