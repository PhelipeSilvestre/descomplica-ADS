var numero01 = window.prompt('Digite um numero'); // prompt é para o usuário digitar
var numero02 = window.prompt('Digite outro numero');
var resultado = Number(numero01) + Number(numero02);

window.alert(`A soma de ${numero01} + ${numero02} = ${resultado}`); // alert é para mostrar
window.confirm(`A soma de ${numero01} + ${numero02} é? = ${resultado}`);

document.write(`A soma de ${numero01} + ${numero02} = ${resultado}`);

