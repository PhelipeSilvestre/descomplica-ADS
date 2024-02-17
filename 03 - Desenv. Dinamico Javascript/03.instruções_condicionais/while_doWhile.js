/* 1 - O while

O while é uma instrução de repetição que executa um bloco de código enquanto uma condição especificada for verdadeira. Vejamos a sintaxe do while:

while (condicao) {

  // bloco de código a ser executado

}

*/

let i = 0;

while (i < 10) {

  let texto = "O número é " + i;

  console.log(texto);

  i++;

}

/* No código acima, começamos com e = 0 e, a cada iteração, incrementamos o valor de e em 1. Enquanto e for menor que 10, o bloco de código dentro do while será executado. Esse loop continuará até que e seja igual a 10, momento em que a condição se torna falsa e a execução é encerrada.

*/


///////////////////////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//////////////////////////////


/* 2 - O do-while

O do-while é uma variação do while. A diferença fundamental é que o bloco de código é executado pelo menos uma vez, independentemente da condição ser verdadeira ou falsa. Vejamos a sintaxe do do-while:

do {

  // bloco de código a ser executado

} while (condicao);


*/

let resultado = "";

let e = 0;

do {

  resultado += "Número " + e + ", ";

  e++;

} while (e < 5);

console.log(resultado);

/*
No código acima, independentemente da condição ser verdadeira ou falsa, o bloco de código será executado pelo menos uma vez. No exemplo, adicionamos o valor de e ao resultado a cada iteração e incrementamos seu valor. Nesse caso, o bloco é executado até que e seja igual a 5.
*/