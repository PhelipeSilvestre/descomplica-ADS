/* EXERCICIO
- Crie um array com todos os meses do ano
- Divida por trimestres
 */

var mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var primeiroTrimestre = mesAno.slice(0, 3);
var segundoTrimestre = mesAno.slice(3, 6);
var terceiroTrimestre = mesAno.slice(6, 9);
var quartoTrimestre = mesAno.slice(9, 12);

console.log(primeiroTrimestre);
console.log(segundoTrimestre);
console.log(terceiroTrimestre);
console.log(quartoTrimestre);