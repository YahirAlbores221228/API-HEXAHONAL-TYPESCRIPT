import { getProducto } from "../application/GetProducto";
import { CreateProductos } from "../application/CreateProductos";
import { productoRepositori } from "../infrastructure/ProductoRespository";
import { ProductosController } from "./ProductoControllers";

const productoRes = new productoRepositori();
const createproductos = new CreateProductos(productoRes)
const getproducto = new getProducto(productoRes)

export const productosController = new ProductosController(createproductos, getproducto)