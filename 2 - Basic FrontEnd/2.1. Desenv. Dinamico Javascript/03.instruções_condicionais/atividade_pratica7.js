/* ATIVIDADE PRÁTICA

Título da Prática:  Estrutura de repetição

Prática

Imagine que você está desenvolvendo um programa em JavaScript para calcular a soma dos elementos de um array de números. Sua tarefa é escrever um código que utilize a estrutura ‘do while’ em conjunto com o método ‘reduce’ para realizar essa soma.

O programa deve começar recebendo um array de números como entrada. Em seguida, será necessário declarar uma variável chamada ‘sum’ e inicializá-la com o valor zero. Essa variável será responsável por armazenar a soma acumulada dos elementos do array.

Após a inicialização da variável ‘sum’, você precisará definir um índice inicial, que será utilizado no loop ‘do while’. O índice deve ser inicializado com zero, indicando que a primeira iteração do loop começará pelo primeiro elemento do array.

Dentro do loop, você utilizará o método ‘reduce’ para realizar a soma acumulativa. Esse método recebe uma função de callback que, a cada iteração, adiciona o valor do elemento atual ao valor acumulado. A função de callback também verifica se o índice atual é menor ou igual ao índice definido anteriormente, para garantir que apenas os elementos até o índice atual sejam somados.

Após cada iteração do loop, o índice é incrementado em uma unidade. O loop continuará até que o índice seja igual ao comprimento total do array, o que indica que todos os elementos foram somados.

Por fim, o programa exibirá a mensagem ‘A soma dos números é:’, seguida pelo valor final da variável ‘sum’, que representa a soma total dos elementos do array.

Em resumo, seu código deve utilizar a estrutura ‘do while’ e o método ‘reduce’ para calcular a soma dos números em um array. Essa solução permite uma abordagem eficiente e concisa para resolver esse problema específico.

Boa sorte!

 */


// Função para somar números

// Array de números

const numbers = [1, 2, 3, 4, 5];

// Variável para armazenar a soma

let sum = 0;

// Índice inicial para o reduce

let index = 0;

// Executa o reduce utilizando do while

do {

  sum = numbers.reduce((accumulator, currentValue, currentIndex) => {

    if (currentIndex <= index) {

      return accumulator + currentValue;

    } else {

      return accumulator;

    }

  }, sum);

  index++;

} while (index < numbers.length);

console.log("A soma dos números é:", sum);



