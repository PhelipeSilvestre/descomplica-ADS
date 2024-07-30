class MinhaClasse {
  constructor(valor) {
    this.valor = valor;
  }

  // metodo
  operacaoAssincrona() {
    return new Promise((resolve, reject) => {
      const resultado = this.valor * 2;

      if (resultado >= 0) {
        resolve(resultado);
      } else {
        reject("O resultado é negativo! ");
      }
    });
  }
}

const myClass = new MinhaClasse(0);
myClass
  .operacaoAssincrona()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
