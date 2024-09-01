import { conn } from "./config.js";

// connection.execute() ver se nao vai dar mais performace

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

      //console.log("update");
    //  console.log(results);
      return true
    }

 
    async function createTrasacao(id,params){
       const [results] = await conn.query(
        'INSERT INTO `transacoes`(`cliente_id`,`valor`,`tipo`,`descricao`) values(?,?,?, ?)',[id, params.valor, params.tipo, params.descricao]
       )
    }

    async function getTransacoes(id){//algo me diz que isso nao devia estar aqui
      // as vozes junto com meus dois neuronios me fazem acreditar que usar o join nao é inteligente
      
      
      const [results] = await conn.query(
      'SELECT * FROM `transacoes` WHERE `cliente_id` = ? ORDER BY `realizada_em` DESC LIMIT 10',
        [id]
      );

      return results




    }






export {getClienteById, updateCliente, createTrasacao, getTransacoes}