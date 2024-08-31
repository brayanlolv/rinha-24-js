import { Transacao } from "../Model.js";

describe("Transacao construtor",()=>{

    describe("expected throws",()=>{
        
        it(" valor transicao menor que zero",()=>{
            expect(()=>new Transacao(1,-2,'d',"s")).toThrow()
        })
        
        it("tipo transicao fora de especificacao ",()=>{
            expect(()=>new Transacao(1,2,'r',"s")).toThrow()
            expect(()=>new Transacao(1,2,6,"s")).toThrow()
            expect(()=>new Transacao(1,2,"","s")).toThrow()
        })
        it("descricao",()=>{
            expect(()=>new Transacao(1,2,'d',"")).toThrow()
            expect(()=>new Transacao(1,2,'d',"asdjisadjasdjasdjsad")).toThrow()
           // expect(()=>new Transacao(1,2,'d',[2])).toThrow() nao vou tratar essa situacao para aumentar performace
        })
        
    })

    describe("expected sucess ",()=>{
        test("exemplo1",()=>{
            const classInstance = new Transacao(1000,"c","descricao")
            expect(classInstance.valor).toBe(1000)
            expect(classInstance.tipo).toBe("c")
            expect(classInstance.descricao).toBe("descricao")
        })
    })

})

