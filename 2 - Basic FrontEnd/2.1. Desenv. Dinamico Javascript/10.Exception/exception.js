function divisao(a, b) {
  if (b == 0) {
    throw new Error("Divisão por zero não permitida");
    // caso aconteça algum erro no processo de divisão deve ser tratado aqui
  }
  return a / b;
}

//
try {
  var result = divisao(10, 0);
  console.log("O resultado e: " + result);
} catch (error) {
  console.log("O correu uma exceção" + error.message);
} finally {
  console.log("Executado sempre");
}
