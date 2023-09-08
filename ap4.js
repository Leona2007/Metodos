



//Olá professor, pensei que a tarefa seria entregue ate as 23:59 da sexta, desculpe me pelo atraso



var prompt = require("prompt-sync")()
const prova = {
    materia: "matemática",
    professor: "beltrano",
    horario: "10:15",
    fazer : function(){
        var estudo = prompt(console.log("Você vai fazer a prova, você estudou?? [1 para SIM / 2 para NÃO] = "));
        if(estudo == 1){
            console.log("PARABÉNS!! Você tirou 10");
        }
        if(estudo == 2){
            console.log("Você não estudou e tirou 5,7. Mais sorte na próxima vez");
        }
        if(estudo != 1 && estudo != 2){
            console.log("Número errado");
        }
    }
}
console.log("Você irá fazer a prova de " + prova.materia + " do professor " + prova.professor + " ás " + prova.horario);
prova.fazer()