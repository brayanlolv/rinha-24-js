import { conn } from "./config.js";

async function getClienteById(id){

    // Using placeholders

    const [results] = await conn.query(
      'SELECT * FROM `clientes` WHERE `id` = ?',
      [id]
    );
  
    console.log(results);
    if(results[0] == null) throw 404

    return results[0]
    
}

  async function updateCliente(id,novoSaldo){
    const [results] = await conn.query(
      'UPDATE  `clientes` SET `saldo` = ? WHERE `id` = ?',
      [novoSaldo,id]
    );
    
    console.log("update");
    console.log(results);
    return results[0]
  }



export {getClienteById, updateCliente}