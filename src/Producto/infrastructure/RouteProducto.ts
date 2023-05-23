import express from "express"
import {productosController} from "./Dependencias";
export const routes = express.Router();
routes.post('/', productosController.create.bind(productosController));
routes.get('/', productosController.getProducto.bind(productosController))
routes.get('/:id', productosController.getProductoid.bind(productosController))