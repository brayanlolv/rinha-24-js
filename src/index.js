import express from "express"
import conectou from "./config.js"
import { fazerTransacao, obterExtrato } from "./services.js"
const server = express()



server.get('/', function (req, res) {
    res.send('Hello World')
  })

server.post("/clientes/[id]/transacoes",fazerTransacao)
server.get( "/clientes/[id]/extrato", obterExtrato)

server.listen(3000,(console.log("rodando na porta 3000")))