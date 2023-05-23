/* import { ProductoRepository } from "../domain/Producto-repository";

export class ProductoID{
constructor(readonly productoRepository: ProductoRepository){}

async run(id: number) {
    const producto = await this.productoRepository.getById(id);
    if (!producto) throw new Error("Usuario no encontrado");
console.log(producto);
}
} */
import { ProductoRepository } from "../domain/Producto-repository";


export class Getproductoid {
    constructor(readonly productoRepository: ProductoRepository) { }

    async Productoid (id:number) {
        return this.productoRepository.getById(id)
            .then((productoResolve) => {
                console.log(productoResolve);
                return productoResolve;
            }).catch((error) => {
                console.log(error)
            })
    }
}