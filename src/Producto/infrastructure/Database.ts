import {createPool, Pool,PoolOptions} from 'mysql2';


export class database {
  configuration:PoolOptions ={
    host: 'localhost',
    user: 'yahiralbores',
    password: 'Madrigal24',
    database: 'productosdecarros',
    port: 3306
  };
   connection:Pool= createPool(this.configuration)

}

