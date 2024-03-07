function obterValor(valor) {
  return new Promise((resolve, reject) => {
    if (valor > 10) {
      valor += 1;
      resolve(valor);
    } else {
      reject("O valor deve ser maior que 10");
    }
  });
}

function dobraValor(valor) {
  return valor * 2;
}

function adicionar10(valor) {
  return valor + 10;
}

obterValor(28)
  .then((valor) => {
    console.log("Valor obtido");
    return dobraValor(valor);
  })
  .then((novoValor) => {
    console.log("Novo valor", novoValor);
    return adicionar10(novoValor);
  })
  .then((resultado) => {
    total = resultado + 5;
    console.log("O resultado final e: ", total);
  })
  .catch((erro) => {
    console.log("ocorreu um erro", erro);
  });
