import mysql from "mysql2/promise"

const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'rinha',
    password: "example"
  });
  
 async function conectou(){
    try {
        const [results, fields] = await conn.query(
          'SELECT * FROM clientes'
        );
      
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      } catch (err) {
        console.log(err);
      }

}

  
export {conn}
export default conectou