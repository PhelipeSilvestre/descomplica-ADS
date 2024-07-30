//  1 - Forma de criar um objeto

const pessoa = {
  nome: "Luiz", // uma propriedade do objeto pessoa
  sobrenome: "Miranda",
  idade: 25,
  peso: 88.6,
};

const chave = "idade";
console.log(pessoa[chave]); // uma forma de acessar uma propriedade

console.log(pessoa["nome"]); // outra forma

// 2 - Forma de criar um objeto

const pessoa2 = new Object();
pessoa2.nome = "Carlos";
pessoa2.sobrenome = "Miranda";
pessoa2.idade = 35;
pessoa2.peso = 77;
console.log(pessoa2);

console.log(pessoa2.nome);

// 3 - Forma de criar um objeto com function

function criarPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa3 = criarPessoa("Monica", "Miranda", 35);
console.log(pessoa3);
