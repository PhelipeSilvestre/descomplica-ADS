// receive input from user name and last name, concatanate and print

const readline = require("readline-sync");
const nome = readline.question("Qual seu nome? ");
const sobrenome = readline.question("Qual seu sobrenome? ");

const nomeCompleto = `${nome} ${sobrenome}`;
console.log(`Seu nome completo é: ${nome} ${sobrenome}`);
 