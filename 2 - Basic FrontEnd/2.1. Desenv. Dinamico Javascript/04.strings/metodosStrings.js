var curso = "Javascript";

console.log(curso.length); //retorna 10

//Outra opção é usar o charAt que retorna o caractere da posição especificada (inicia em 0).

var curso = "Javascript";

console.log(curso.charAt(2)); //retorna v

//Um dos mais usados é o indexOf, que retorna o número da posição onde começa a primeira "string".

var curso = "Javascript top";

curso.indexOf("top"); //Resultado: 11

//Outro que podemos usar é a substring que retorna o conteúdo da string que corresponde ao intervalo especificado. Começa no caractere posicionado em index1 e termina em index2 substring(index1, index2)

var curso = "Javascript";

curso.substring(0, 4); //Resultado: Java

//Outro muito legal é o TOUPPERCASE() que passa o conteúdo da string para letra maiúscula (Caixa Alta)

var curso = "Javascript";

curso.toUpperCase(); //Resultado: JAVASCRIPT

//Outro muito legal também é o TOLOWERCASE()que passa o conteúdo da string para letra minúscula (Caixa Baixa).

var curso = "Javascript";

curso.toLowerCase(); //Resultado: javascript

// Outro que usamos bastante no nosso dia a dia de desenvolvedor é o replace. Ele substitui um valor por outro

var curso = "Javascript";

curso.replace("JavaScript", "Java"); //Resultado: Java
