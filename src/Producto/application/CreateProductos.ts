import { ProductoRepository } from "../domain/Producto-repository"


export class CreateProductos {
    constructor(readonly productoRepository: ProductoRepository) { }
    async createProducto(id: number, nombre: string, precio: number, garantia: string) {
        return this.productoRepository.create(id, nombre, precio, garantia)
            .then((createProductos) => {
                console.log(createProductos);
                return createProductos;
            }).catch((error) => {
                console.log(error);
            })

    }
}











