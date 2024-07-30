// programa que verifica a elegibilidade de candidatos a vaga de emprego
// receberá informações sobre cada candidato, incluindo idade, experiência em anos, nível de educação e se o candidato possui um certificado.
// O código deve utilizar operadores aritméticos e lógicos para realizar as comparações necessárias.


var idade = 30;
var experiencia = 2;    
var escolaridade = "superior";
var certificado = true;

if (idade >= 18 && experiencia >= 1 && escolaridade === "superior" && certificado == true) {
    console.log("Candidato elegível para a vaga de emprego");
} else {
    console.log("Candidato não elegível para a vaga de emprego");
}