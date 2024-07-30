// Calculando o imc de uma pessoa usando objetos

function criarpessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    altura: a,
    peso: p,
    calculoImc() {
      const indice = this.peso / (this.altura ** 2).toFixed(1);
      if (indice < 18.5) {
        console.log("Está a baixo do peso");
      } else if (indice >= 18.5 && indice <= 24.9) {
        console.log("Peso normal");
      } else if (indice >= 25 && indice <= 29.9) {
        console.log("Sobrepeso");
      } else if (indice >= 30 && indice <= 34.9) {
        console.log("Obesidade de classe I");
      } else if (indice >= 35 && indice <= 39.9) {
        console.log("Obesidade de classe II");
      } else if (indice >= 40) {
        console.log("Obesidade de classe III");
      }
    },
  };
}
const p1 = criarpessoa("Luiz", "Miranda", 1.75, 80);
p1.calculoImc();
