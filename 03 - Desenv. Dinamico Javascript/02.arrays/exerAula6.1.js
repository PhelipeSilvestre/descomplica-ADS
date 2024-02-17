/* EXERCICIOS 
- Crie um objeto que tenha as seguintes propriedades:
    - id
    - descrição
    - categoria
    - precos   
    - quantidade
- Filtre os objetos do array pelo pela categoria "Eletronico"    
*/

var produtos = [
    { id: 1, descrição: "Computador", categoria: "Eletronico", precos: 2000.00, quantidade: 10 },
    { id: 2, descrição: "Mesa", categoria: "Movel", precos: 250.00, quantidade: 5 },
    { id: 3, descrição: "Tablet", categoria: "Eletronico", precos: 500.00, quantidade: 20 },
    { id: 4, descrição: "Mouse", categoria: "Eletronico", precos: 50.00, quantidade: 30 },
    { id: 5, descrição: "Teclado", categoria: "Eletronico", precos: 100.00, quantidade: 40 },
    { id: 6, descrição: "Cadeira", categoria: "Movel", precos: 300.00, quantidade: 15 },
    { id: 7, descrição: "Geladeira", categoria: "Eletrodomestico", precos: 1000.00, quantidade: 10 }
];

var categoria = produtos.filter((item) => item.categoria === "Eletronico");
console.log(categoria);
