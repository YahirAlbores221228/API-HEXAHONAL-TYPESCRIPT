import { Producto } from "./Producto-de-carro";
export interface ProductoRepository {
    create(id: number, nombre: string, precio: number, garantia: string): Promise<Producto>;
    getProducto(): Promise<Producto[] | null>;
}