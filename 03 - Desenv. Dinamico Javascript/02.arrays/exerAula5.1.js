/* Exercicio:
- Crie um array com 5 nomes: Phelipe / Monica / Samuel / Ronaldo / Lucas
- Acrecente um nome
- Retire o ultimo elemento do array
- Encontre a posição do Samuel
- Troque o nome Monica por Cebolinha
*/

var nome = ["Phelipe", "Monica", "Samuel", "Ronaldo", "Lucas"]; // Cria o array
nome.push("Carlos"); // adiciona um elemento
nome.pop(); // remove o ultimo elemento
nome.splice(1, 1, "Cebolinha"); // troca o elemento 1 por Cebolinha

var posicao = nome.indexOf("Samuel"); // localiza a posição

console.log(nome);
console.log(posicao);
