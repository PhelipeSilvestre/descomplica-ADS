/* ~ INSTRUÇÃO CONDICIONAL IF ELSE
    Instrução condicional que executa a afirmação, se determinada condição for verdadeira.

    sintaxe:
    if (condicao) {
        // instruções a serem executadas se a condição for verdadeira
    } else {
        // instruções a serem executadas se a condição for falsa
    }

 */

var numero = 5;

if (numero > 0) {
    console.log("Número positivo");
} else {
    console.log("Número negativo");
}


// outro exemplo
var nascionalidade = "Brasileira";
var idade = 18;
var titulo = "valido";

if (nascionalidade === "Brasileira" && idade >= 18) {
    console.log("Candidato elegivel para votação");
} else {
    console.log("Candidato não elegível para votação");
}

