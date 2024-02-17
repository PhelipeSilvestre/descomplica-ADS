/**  Loop forin e forof
 *
 * Neste exemplo, utilizamos o loop “forin” para percorrer os índices do array carros e exibir tanto o índice quanto o valor correspondente. Em seguida, usamos o loop “forof” para iterar diretamente sobre os valores do array, sem a necessidade de acessá-los pelos índices.
 *
 * Neste exemplo, temos um array de carros representado pela variável carros. Utilizamos um loop “forin” para percorrer cada elemento do array e acessar a propriedade preco de cada carro.
 */

// forin é uma forma de iteração que nos permite acessar os atributos de um objeto.
// Nesse código, utilizamos o “forin” para percorrer cada atributo do objeto “carro” e exibir seu valor no console. Isso nos permite acessar e manipular os dados do objeto de forma conveniente. Experimente adicionar mais atributos ao objeto e observe como o “forin” percorre cada um deles.

const carros = ["Corsa", "Punta", "Gol"];

console.log("Iteração usando forin:");

for (let indice in carros) {
  console.log("Índice:", indice, "Valor:", carros[indice]);
}

//////////////////////////////////////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///////////////////////////////////////////////////////////

/* O For Off:

O For Off é uma forma conveniente de percorrer os itens de um array em JavaScript. Podemos utilizar essa estrutura para realizar tarefas específicas em cada elemento do array. A sintaxe é simples:

for (const item of array) {

  // bloco de código a ser executado

}

*/

console.log("Iteração usando forof:");

for (let carro of carros) {
  console.log("Valor:", carro);
}

const carros2 = [
  { modelo: "Audi A3", marca: "Audi", ano: 2020 },

  { modelo: "Compact", marca: "Jeep", ano: 2021 },
];

for (const carro of carros2) {
  console.log(carro.ano);
}
