



//Olá professor, pensei que a tarefa seria entregue ate as 23:59 da sexta, desculpe me pelo atraso





eletronico = {
    tipo: "PC",
    preco: "3000 Reais",
    armazenamento: "512 GB",
    memoria: "16 GB",
    ligar: function(){
        console.log("O " + eletronico.tipo + " está ligando...");
    }
}

console.log(`Você comprou um ${eletronico.tipo} de ${eletronico.preco}. Ele tem ${eletronico.armazenamento} de armazenamento e ${eletronico.memoria} de memória ram.`);
eletronico.ligar()