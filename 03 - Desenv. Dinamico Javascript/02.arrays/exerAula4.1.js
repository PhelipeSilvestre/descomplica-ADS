// calcular a media dos valores de um Array

var valores = [1, 2, 3, 4, 5];
var soma = 0;
var media = 0;
for (var i = 0; i < valores.length; i++){
    soma += valores[i]; 
    
}
media = soma / valores.length;
    console.log(media);