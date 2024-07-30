/* INSTRUÇÃO SWITCH
Instrução condicional que executa a afirmação, se determinada condição for verdadeira.

Avalia a expressão, combinando o valor da expressão para uma clausula case,  e executa as expressões associadas. Caso nenhum case seja avaliado, o valor padrao é executado.

sintaxe:
switch (expressão) {
    case expressão1:
        // instruções a serem executadas se a expressão1 for verdadeira
        break;
    case expressão2:
        // instruções a serem executadas se a expressão2 for verdadeira
        break;
    default:
        // instruções a serem executadas se nenhuma expressão for verdadeira
}

*/

var diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sabado");
    break;
  default:
    console.log("Dia inválido");
}
