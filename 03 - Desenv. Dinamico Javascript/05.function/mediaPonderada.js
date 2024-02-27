/*
ATIVIDADE PRÁTICA

Objetivos: Compreender o uso e os tipos de funções

Prática

Bem-vindo ao programa de cálculo de média ponderada! Neste exercício, você será responsável por criar um script em Node.js para calcular a média ponderada de um aluno, com base em três notas fornecidas pelo usuário. A média ponderada é uma forma de calcular a média levando em consideração pesos diferentes para cada nota.

Você precisará utilizar a biblioteca readline-sync para permitir a interação com o usuário através do console. O programa solicitará que o usuário informe as três notas do aluno e, em seguida, calculará a média ponderada dessas notas, utilizando os seguintes pesos: 2, 3 e 5, respectivamente.

Após realizar os cálculos, o programa exibirá a nota da média ponderada no console. Lembre-se de que a média ponderada é uma medida importante para avaliar o desempenho dos alunos, uma vez que determinadas disciplinas ou avaliações podem ter maior peso na nota final.

Vamos lá! Mãos à obra para criar um script eficiente em Node.js que irá calcular a média ponderada do aluno com base nas notas fornecidas. Boa sorte!
*/

const readline = require("readline-sync");

function calcularMediaPonderada(notas) {
  const pesos = [2, 3, 5]; //pesos das notas 2, 3 e 5
  let somaPesos = 0;
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaPesos += pesos[i];
    somaNotas += notas[i] * pesos[i];
  }
  const media = somaNotas / somaPesos;
  return media;
} // essa função calcula a media ponderada

function lerNotas() {
  const notas = [];

  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(readline.question(`Digite a nota ${i + 1}: `));
    notas.push(nota);
  }
  return notas;
} // solicita ao usuario as notas

function main() {
  console.log("Calculadora de Media Ponderada\n");

  const notas = lerNotas();
  const media = calcularMediaPonderada(notas);
  console.log(`\nA media ponderada do aluno é: ${media.toFixed(2)}`);
} // chama as funções

main();
