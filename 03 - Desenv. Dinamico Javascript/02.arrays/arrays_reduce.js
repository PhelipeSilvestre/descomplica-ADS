/* ~ METODO REDUCE ~
O metodo array.reduce() reduz um array de valores  a um unico valor. Para obter o o valor de resultado, ele executa uma função de redução em cada elemento de array.

Sintaxe:
array.reduce(function(total, item, index, array) { ... }, initialValue)

Quando se usa: quando se tem um array de valores e deseja somar todos os valores do array.
*/

var numeros = [1, 2, 3, 4, 5];
var total = numeros.reduce(function (total, numero) {
  return total + numero;
}, 0);

console.log(total);

// ou
var soma = numeros.reduce((total, item) => total + item);
console.log(soma);
