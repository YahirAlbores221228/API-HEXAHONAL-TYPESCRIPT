
import { Request, Response } from 'express';
import { CreateProductos } from '../application/CreateProductos';
import { getProducto } from '../application/GetProducto';
import { Getproductoid } from '../application/Getproductoid';

export class ProductosController {

    constructor(readonly createProductos: CreateProductos, readonly getproducto: getProducto, readonly getproductid:Getproductoid) { }
    getProducto = async (req: Request, res: Response) => {
        try {
            console.log("Estto son los productos");
            const consul = await this.getproducto.AllProducto();
            console.log("Esto contiene nuestra base de datos", consul)
            res.status(200).json(consul);
        } catch {
            res.status(500).json({ error: "intenta de nuevo" })
        }
    }

getProductoid = async (req: Request, res: Response) => {
        try {
            console.log("Este es el producto");
            const {id}=req.params
            const consul = await this.getproductid.Productoid(Number(id));
            console.log("Esto contiene nuestra base de datos", consul)
            res.status(200).json(consul);
        } catch {
            res.status(500).json({ error: "intenta de nuevo" })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const { id, nombre, precio, garantia } = req.body
            const dataproducto = await this.createProductos.createProducto(id, nombre, precio, garantia);
            res.status(200).json(dataproducto)
        } catch (error) {
            res.status(500).json({ error: "servidor error" })
        }
    }
}
