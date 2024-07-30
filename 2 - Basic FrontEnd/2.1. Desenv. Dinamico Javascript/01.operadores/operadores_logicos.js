/* ~ OPERADORES LOGICOS ~
Operadores lógicos são usados para formular condições. Uma condição sempre consiste em dois lados que se baseiam na igualdade ou na desigualdade. Pode ser true ou false. Exemplo:

*/

a = 3; b = 5; 

       
// se a é igual a b, a afirmação é verdadeira
if (a == b) {
        console.log(" A afirmação é verdadeira"); // caso a consição acima seja verdadeira esse trexo de codigo será executado.
} else {
    console.log("A afirmação é falsa");
} 

// se a não é igual para b, a afirmação é verdadeira 
if (a != b) {
    console.log("A afirmação é verdadeira");
} 

// se a é 3 AND b não é 4, então verdadeiro 
if (a == 3 && b != 4) {
    console.log("A afirmação é verdadeira");
}  
    
// se a for 4 OU b for 5, verdadeiro 
if (a == 4 || b == 5) {
    console.log("A afirmação é verdadeira");
} 
    
// se a for menor que 5, verdade
if (a <5) {
    console.log("A afirmação é verdadeira");
} 

