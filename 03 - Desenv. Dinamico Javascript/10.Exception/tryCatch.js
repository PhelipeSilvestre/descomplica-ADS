const numeros = ["a", 2, 4, 6, 8, 10];

try {
  const doubleNumbers = numeros.map((num) => {
    if (typeof num !== "number") {
      throw new Error("O elemento deve ser um número");
    }
    return num * 2;
  });
  console.log(doubleNumbers);
} catch (error) {
  console.log("O correu uma exceção" + error.message);
}
