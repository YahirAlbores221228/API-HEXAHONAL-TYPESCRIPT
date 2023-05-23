import { database } from './Database'
import { Producto } from '../domain/Producto-de-carro'
import { ProductoRepository } from "../domain/Producto-repository"
import { QueryError } from 'mysql2'

export class productoRepositori implements ProductoRepository {
  async getProducto(): Promise<Producto[] | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query("SELECT * FROM productosdecarros.productos", (error: QueryError, rows: Producto[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
        }
      });
    });
  };

  async create(id: number, nombre: string, precio: number, garantia: string): Promise<Producto> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      const sql = `INSERT INTO productosdecarros.productos(id,nombre,precio,garantia) VALUES ('${id}','${nombre}','${precio}','${garantia}')`;
      mysql.connection.query(sql, (error: QueryError, results: Producto) => {
        if (error) {
          reject(error)
        } else {
          resolve(results);
        }
      });
    })
  };
}
