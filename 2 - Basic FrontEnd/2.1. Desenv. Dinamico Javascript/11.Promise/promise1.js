const minhaPromise = new Promise((resolve, reject) => {
  // dentro da promise, teremos o resolve e o reject como parametros
  const sucesso = true;
  if (sucesso) {
    resolve("Deu bom!");
  } else {
    reject("Deu ruim!");
  }
});

minhaPromise
  .then((response) => {
    console.log("Com sucesso: " + response);
  }) // se der bom, vai executar o then

  .catch((error) => {
    console.log(error);
  }); // se der ruim, vai executar o catch
