function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(2, 3)); // Exemplo de chamada da função

// função anonima
const multiplicarAnonima = function (a, b) {
  return a * b;
};
console.log(multiplicarAnonima(2, 3));

// arrow function
const multiplicarArrow = (a, b) => a * b;
console.log(multiplicarArrow(2, 3));

// arrow function com array e utilizando o map
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr.map((element) => element * 2);
console.log(arr2);

// array de palavras em minusculo e usando a arrow funcion altere a primeira palavra para maiusculo
const palavras = ["hello", "world", "javascript"];
const palavrasMaiusculas = palavras.map(
  (palavra) => palavra[0].toUpperCase() + palavra.slice(1)
);
console.log(palavrasMaiusculas);
