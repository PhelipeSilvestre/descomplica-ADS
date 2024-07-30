
// outr aforma de usar o promise
function somaArray(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject("O argumento deve ser um array");
    }

    const soma = array.reduce((total, num) => total + num, 0);

    resolve(soma);
  });
}

const myArray = [1, 2, 3, 4, 5];
somaArray(myArray)
  .then((soma) => {
    console.log("a soma dos elementos do array é: " + soma);
  })
  .catch((error) => {
    console.log("Ocorreu um erro: " + error);
  });
