/* Uma Promise em JavaScript é um objeto que representa a conclusão (ou falha) assíncrona de uma operação. Ela possui três estados: pendente (pending), realizada (fulfilled) e rejeitada (rejected). O funcionamento básico pode ser resumido da seguinte forma:

Criação da Promise:

Uma Promise é criada usando o construtor Promise, que recebe uma função executora com dois parâmetros: resolve e reject.
A função executora contém o código assíncrono a ser executado.
Exemplo:
*/
const minhaPromise = new Promise((resolve, reject) => {
    // Código assíncrono aqui
});

/*
Transição de Estados:

Durante a execução assíncrona, a Promise pode transitar entre os estados pendente, realizada ou rejeitada.
A transição para os estados realizada ou rejeitada é feita chamando resolve() ou reject() na função executora.
Exemplo:
*/

const minhaPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Operação concluída com sucesso!');
        // ou
        // reject('Ocorreu um erro na operação.');
    }, 1000);
});

/*
Manipulação de Resultados:

Métodos como then() e catch() são usados para manipular o resultado quando a Promise é realizada ou rejeitada, respectivamente.
O método then() é encadeado para lidar com o resultado da Promise quando ela é realizada.
O método catch() é usado para tratar erros quando a Promise é rejeitada.
Exemplo:
*/

minhaPromise
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro));

/* Essa é uma visão geral simplificada do funcionamento de uma Promise em JavaScript. Ela é amplamente utilizada para lidar com operações assíncronas, facilitando a escrita de código mais legível e eficiente. */