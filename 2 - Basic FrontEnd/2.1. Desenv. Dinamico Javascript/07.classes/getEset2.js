/*Em JavaScript, os métodos get e set são usados para definir ou acessar propriedades de um objeto de maneira controlada. Eles são usados em conjunto com os conceitos de "getters" e "setters". Aqui está uma explicação breve:

Getter (get):

Um método get é usado para obter o valor de uma propriedade de um objeto.
Ele é declarado usando a palavra-chave get seguida pelo nome da propriedade desejada.
Quando a propriedade é acessada, o método get é automaticamente chamado e seu valor de retorno é retornado.
Exemplo: */

const meuObjeto = {
  _minhaPropriedade: 42,
  get minhaPropriedade() {
    return this._minhaPropriedade;
  },
};

console.log(meuObjeto.minhaPropriedade); // Saída: 42

/*
Setter (set):

 Um método set é usado para atribuir um valor a uma propriedade de um objeto.
Ele é declarado usando a palavra-chave set seguida pelo nome da propriedade desejada.
Quando a propriedade é atribuída, o método set é automaticamente chamado, recebendo o valor atribuído como argumento.
Exemplo: */

const meuObjeto2 = {
  _minhaPropriedade2: 42,
  set minhaPropriedade(novoValor) {
    this._minhaPropriedade = novoValor;
  },
};

meuObjeto.minhaPropriedade = 99;
console.log(meuObjeto.minhaPropriedade); // Saída: 99

/*O uso de get e set permite a implementação de lógica adicional durante a leitura ou gravação de propriedades, proporcionando um maior controle sobre o comportamento dos objetos em JavaScript.
 */
