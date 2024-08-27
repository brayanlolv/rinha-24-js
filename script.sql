USE rinha;

CREATE TABLE bolacha(
    nome varchar(30)
);

    --sem nome, pois é so uma brincadeira
    --nunca deveria fazer o transacoes sem id, mas é so uma rinha
CREATE TABLE clientes(

    id TINYINT ,
    limite INT,
    saldo INT,
    PRIMARY KEY(id))


INSERT INTO clientes(id,limite,saldo)
    VALUES 
    (1,100000 ,0),
    (2,80000,0),
    (3,1000000 ,0),
    (4,10000000,0),
    (5,500000,0);

CREATE TABLE transacoes(

    cliente_id TINYINT,
    valor INTEGER,
    tipo CHAR,
    descricao VARCHAR(10),
    realizada_em TIMESTAMP,
    

    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
)
