/*  ATIVIDADE PRATICA

- Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.

*/

var bebida = "café";
valor = "";

switch (bebida) {
    case "café": 
        valor = 5.5;
        break;
    case "Leite":
        valor = 3.5;
        break;
    case "Chá":
        valor = 4.5;
        break;
    default:
        console.log("Opção inválida");
        break;        
}
console.log("Bebida escolhida: " + bebida + ", Valor: R$" + valor.toFixed(2))