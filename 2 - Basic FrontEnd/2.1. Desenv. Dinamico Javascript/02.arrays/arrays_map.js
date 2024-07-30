/* ~ METODO MAP ~
O metodo array.map() permite que seja aplicada uma função em todos os elementos de um array.

Sintaxe:
array.map(function(item, index, array) { ... })

A function é a função de callback chamada de elemento do array. O metodo map() sempre passar o elemento atual, o indice do elemento atual e todo o objeto do array para ela.

O argumento this será usado dentro da função callback. Por padrão esse valor é undefined.

*/

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr1.map((element) => element * 2); // multiplica cada elemento do array por 2
console.log(arr2);

// ou

let arr3 = arr1.map(function (element) {
    return element * 2;
});
console.log(arr3);

// utilizando map em um objeto

let escola = [
    { nome: 'Maria', nota: 7.8 },
    { nome: 'Joaquim', nota: 9.2 },
    { nome: 'Ana', nota: 4.5 },
    { nome: 'Carlos', nota: 6.8 },
    { nome: 'Pedro', nota: 3.8 },
]

let aprovados = escola.map((aluno) => {
    if (aluno.nota >= 7) {
        return `Aprovado: ${aluno.nome}`;
    } else {
        return `Reprovado: ${aluno.nome}`;
    }
});
console.log(aprovados);
