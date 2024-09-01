import { getClienteById, updateCliente, createTrasacao, getTransacoes } from "./DAO.js"
import { Transacao } from "./Model.js"

//pegar o id, se o cliente nao existir retornar http error 404

async function fazerTransacao(req, res){
    try{
    const id = parseInt(req.params["id"])
    if(isNaN(id))throw 404// nao sei se vai cair nos testes mas é melhor prevenir
        

    const transacao = new Transacao(req.body.valor,req.body.tipo,req.body.descricao)
        //console.log(transacao) // teste
    const cliente = await getClienteById(id) //por isso depois pra nao fazer uma query atoa com o body do post irregular

    
    //completar trasacao
    
    //nao vou abstrair isso, mas num mundo real escalavel essa funcao nao deveria estar aqui
    if( cliente.saldo - transacao.valor < -1 * cliente.limite)throw 422 //depois tirar esse -1 daqui
    
    await updateCliente(id, (cliente.saldo - transacao.valor))// talvez tirar esse await depois, codigo repetido
    await createTrasacao(id,transacao)// tavez tirar o await 


    res.status(200)
    res.send({
        limite:cliente.limite, 
        saldo :cliente.saldo - transacao.valor //muito feio isso 
    })
    }catch(err){
        res.status(err)
        res.send("deu ruim codigo de erro" + err)
    }
}

async function obterExtrato(req, res){
    try{
        const id = parseInt(req.params["id"])
        if(isNaN(id))throw 404

    //    const transacoes =await  getTransacoes(id)
        const cliente = await getClienteById(id)

        const result = {
                  saldo:{    total: cliente.saldo,
                        data_extrato:new Date(),
                        limite: cliente.limite},
                    ultimas_transacoes:await  getTransacoes(id)
        }

        res.send(result)
    }catch(err){
        res.status(err)
        res.send("deu ruim, codigo ", err)
    }
}

export {fazerTransacao, obterExtrato }