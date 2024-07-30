// ~ ARRAYS ~

var nome = ["Carlos", 5, "Pedros", 85, "Maria"]; // essa é a sintaxe do array
var nome2 = ["Phelipe", "thiago"];

console.log(nome[3]); // mostra o elemento 3 do array
console.log(nome.length); // mostra o tamanho do array

/* OPERAÇÕES BASICAS DE ARRAYS
- push() - adiciona um elemento no final do array
- pop() - remove o elemento no final do array
- shift() - remove o elemento no inicio do array
- unshift() - adiciona um elemento no inicio do 
- splice() - remove e adiciona elementos
- slice() - copia elementos
- sort() - ordena o array
- concat() - concatena arrays
*/

nome.push("João"); // adiciona um elemento no final do array
nome.pop(); // remove o elemento no final do array
nome.shift(); // remove o elemento no inicio do array
nome.unshift("Joaquim"); // adiciona um elemento no inicio do array
nome.splice(1, 1, "Joaquim"); // remove e adiciona elementos
nome.slice(0, 2); // copia elementos
nome.sort();

var junto = nome.concat(nome2);

console.log(nome);
console.log(junto);