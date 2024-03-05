// Em um array de numeros, verifique se os elementos possuem valor negativo caso esteja negativo, o programa deve tratar o erro com o tray catch

function checkPositive(numeros) {
  if (!Array.isArray(numeros)) {
    throw new Error("O argumento deve ser de array");
  } // aqui check se o argumento é um array

  const allPositive = numeros.every((num) => num > 0);
  if (!allPositive) {
    throw new Error("O elemento deve ser positivo");
  } // aqui check se todos os elementos do array são positivos
  return true;
}

try {
  const numeros = [-1, 2, 3, 4, 5];
  const isPositive = checkPositive(numeros);

  console.log(isPositive);
} catch (error) {
  console.log("Ocorreu um erro: " + error.message);
}
