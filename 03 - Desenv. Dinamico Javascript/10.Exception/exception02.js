function processName(nome, callback) {
  if (typeof nome !== "string") {
    callback(new Error("O nome deve ser uma string"));
  }

  if (nome.length === 0) {
    callback(new Error("O nome deve ter algum caracter"));
    return;
  }

  callback(null, "Nome processado com sucesso");
}

processName("Joaquim", (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
});
