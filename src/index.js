import express from "express"
import conectou from "./config.js"
const server = express()

conectou()

server.get('/', function (req, res) {
    res.send('Hello World')
  })

  
server.listen(3000,(console.log("rodando na porta 3000")))