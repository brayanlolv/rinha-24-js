import { getClienteById, updateCliente } from "./DAO.js"
import { Transacao } from "./Model.js"

//pegar o id, se o cliente nao existir retornar http error 404

async function fazerTransacao(req, res){
    try{
    let id = parseInt(req.params["id"])
    if(isNaN(id))throw 404// nao sei se vai cair nos testes mas é melhor prevenir
        

    const transacao = new Transacao(req.body.valor,req.body.tipo,req.body.descricao)
        //console.log(transacao) // teste
    const cliente = await getClienteById(id) //por isso depois pra nao fazer uma query atoa com o body do post irregular

    //nao vou abstrair isso, mas num mundo real escalavel essa funcao nao deveria estar aqui
    if( cliente.saldo - transacao.valor < -1 * cliente.limite)throw 422 //depois tirar esse -1 daqui
    await updateCliente(id, (cliente.saldo - transacao.valor))//tirar esse await depois, codigo repetido
     
    //completar trasacao

    res.status(200)
    res.send("deu bom"+ JSON.stringify(cliente))
    }catch(err){
        res.status(err)
        res.send("deu ruim codigo de erro" + err)
    }
}

function obterExtrato(req, res){

}

export {fazerTransacao, obterExtrato }