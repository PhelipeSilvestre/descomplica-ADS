/** ~ FOR_EACH ~
 * O metodo array.forEach() executa uma função em cada elemento de array. Mas usa uma função de modo diferente do laço for padrão.
 *
 * forEach() passa uma função de callback para cada elemento do array juntamente com os seguintes parametros:
 *
 * - Valor atual(obrigatorio)
 * - Indice (opcional)
 * - Array (opcional)
 *
 * Sintaxe:
 * array.forEach(function(valor, indice, array) {
 *   console.log(array[indice]);
 * });
 *
 *
 */

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach((valor, indice, array) => {
  console.log(array[indice]);
});

var total = 0;
numeros.forEach((valor, indice, array) => {
  total += valor; // soma todos elementos
});
console.log(total);

// Utilizando for in
var total2 = 0;
for (var i in numeros) {
  total2 += numeros[i];
}
console.log(total2);

// Utilizando for of
var total3 = 0;
for (var i of numeros) {
  total3 += i;
}
console.log(total3);
