class Transacao{
    //talvez devesse ter um id 
    valor
    tipo
    descricao

    
    constructor(valor,tipo,descricao){

        if(
            valor < 0
            ||(tipo != 'd' && tipo != 'c' )         
            ||descricao.length > 10 || descricao == "" 

        ){throw 422}

        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao

    
    }

 }

class Cliente{
    //era pra ter um id
    limite
    saldo
    constructor(limite,saldo){
        this.limite = limite
        this.saldo
    }
}


 export {Transacao, Cliente}