class Transacao{
    id
    valor
    tipo
    descricao

    
    constructor(id,valor,tipo,descricao){

        if(
            valor < 0
            ||(tipo != 'd' && tipo != 'c' )         
            ||descricao.length > 10 || descricao == "" 

        ){throw 422}

        this.valor = valor
        this.tipo = tipo
        descricao = descricao
        this.id = id
        this.descricao = descricao

    
    }

 }




 export {Transacao}