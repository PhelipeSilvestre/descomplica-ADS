// Metodo filter() - filtra os elementos de um array - aplica uma condição se for verdadeira o elemento é adicionado ao novo array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // cria o array
const events = numbers.filter((item) => item % 2 === 0); // cria uma condição, se o numero for divisivel por 2, o elemento é adicionado ao novo array
console.log(events);

// outro forma de realizar essa operação é definindo uma função dentro do metodo filter

var numFiltrados = numbers.filter(function (valor) {
  return valor > 5 && valor < 10;
});
console.log(numFiltrados);

// outra forma é criando uma função e utilizando ela para realizar a filtragem

function encontrarValores(valores) {
  return valores > 0 && valores < 5;
}

var numerosEncontrados = numbers.filter(encontrarValores);
console.log(numerosEncontrados);

// Manipulando atravez de um objetos

var funcionarios = [
  { nome: "Joaquim", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 30 },
  { nome: "Carlos", idade: 35 },
];
var pessoasAdultas = funcionarios.filter((pessoa) => pessoa.idade >= 18); // filrando pessoas com mais de 18 anos
console.log(pessoasAdultas);

var tamanhoNome = funcionarios.filter((pessoa) => pessoa.nome.length > 5); // filrando pessoas com mais de 5 letras
console.log(tamanhoNome);
