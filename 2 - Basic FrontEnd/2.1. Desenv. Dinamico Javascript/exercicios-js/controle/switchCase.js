const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: //é possivel deixar os case em linha
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')                    
    }
}

imprimirResultado(9.5)
 imprimirResultado(7)
 imprimirResultado(5.87)
 imprimirResultado(0.8)
 imprimirResultado(-1)