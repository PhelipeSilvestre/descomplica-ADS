fetch("https://jsonplaceholder.typicode.com/users") // URL da API, recebe os dados atravez da API
  .then((response) => response.json()) // transforma os dados em JSON
  .then((data) => {
    // recebe os dados
    preencherLista(data); // preenche a lista
  }); // executa

function preencherLista(data) {
  const listaContainer = document.getElementById("lista-container"); // seleciona o elemento HTML
  const ul = document.createElement("ul"); // cria um elemento HTML
  data.forEach((item) => {
    // percorre o array
    const li = document.createElement("li"); // cria um elemento HTML
    li.textContent = item.name; // adiciona o conteudo do array
    ul.appendChild(li); // adiciona o elemento HTML
  });
  listaContainer.appendChild(ul); // adiciona o elemento HTML
}

/*          LISTA DE SITES COM API GRATUITAS

https://www.anselme.com.br/2022/12/14/7-apis-publicas-gratuitas-e-de-qualidade/#5-8211-Random-User-Data

https://jsonplaceholder.typicode.com/

https://api.adviceslip.com/#endpoint-id

https://medium.com/reactbrasil/10-apis-gr%C3%A1tis-e-legais-para-voc%C3%AA-consumir-69141988ea0b

*/
