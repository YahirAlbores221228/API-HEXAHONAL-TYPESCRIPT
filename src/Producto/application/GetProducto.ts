import { ProductoRepository } from "../domain/Producto-repository";


export class getProducto {
    constructor(readonly productoRepository: ProductoRepository) { }

    async AllProducto() {
        return this.productoRepository.getProducto()
            .then((productoResolve) => {
                console.log(productoResolve);
                return productoResolve;
            }).catch((error) => {
                console.log(error)
            })
    }
}