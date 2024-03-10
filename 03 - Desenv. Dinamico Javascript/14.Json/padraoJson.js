/* 
JSON, que significa "JavaScript Object Notation", é um formato leve de troca de dados. Em JavaScript, é comumente utilizado para representar dados estruturados como pares chave-valor em um formato fácil de ler e escrever. JSON é frequentemente utilizado para a comunicação entre servidores e clientes web, permitindo a transferência de dados de maneira eficiente e compatível com várias linguagens de programação.
*/

const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor",
};

const pessoaJson = JSON.stringify(pessoa); // converte o objeto em string JSON
console.log(pessoaJson); // imprime a string JSON
console.log(pessoa); // imprime o objeto

const pessoaObj = JSON.parse(pessoaJson); // converte a string JSON em objeto
console.log(pessoaObj); // imprime o objeto
