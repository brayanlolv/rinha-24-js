import { Transacao } from "../Model.js";

try{
    let t = new Transacao(2,-2,'d',"fjdisafdsfdoishf")
    console.log(t)

}catch(errCode){
    console.log(errCode)
}

//node src/__test__/transacao_test.js
