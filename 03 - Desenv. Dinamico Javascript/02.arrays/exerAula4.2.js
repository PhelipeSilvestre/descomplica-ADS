// Dado um array de números inteiros, o programa deve realizar duas verificações distintas.
// 1 - Na primeira verificação, é necessário identificar se pelo menos um número no array não é par ou é menor que zero.
// Na segunda verificação, o programa deve determinar se todos os números no array são divisíveis por 3 e 5 simultaneamente.

var array = [-2, -1, 0, 1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
    if (array[i] < 0 || array[i] % 2 !== 0) {
        console.log("O elemento " + array[i] + " é par ou negativo");
    }
}

for (var i = 0; i < array.length; i++) {
    if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
        console.log("O elemento " + array[i] + " não é divisível por 3 e 5 simultaneamente");
    }
}

var teste = [1,2,3]
teste.pop()
console.log(teste)