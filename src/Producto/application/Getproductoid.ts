
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