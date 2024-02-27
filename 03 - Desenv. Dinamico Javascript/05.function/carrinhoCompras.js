// Carrinho de compras

const shoppingCar = [];

function addItemToCart(item) {
  shoppingCar.push(item);
  console.log(shoppingCar);
} // adiciona um item ao carrinho

function removeItemFromCart(item) {
  const index = shoppingCar.indexOf(item);
  if (index !== -1) {
    shoppingCar.splice(index, 1);
  }
} // remove um item do carrinho

function viewCart() {
  if (shoppingCar.length == 0) {
    console.log("Your shopping car is empty");
  } else {
    console.log(" Your shopping car contains:");
    for (let i = 0; i < shoppingCar.length; i++) {
      console.log(shoppingCar[i]);
    }
  }
} // verifica se o carrinho de compras contém itens e mostra os items

function clearCart() {
  shoppingCar.length = 0;
  console.log("Your shopping car is empty");
} // limpa o carrinho de compras

addItemToCart("apple");
addItemToCart("banana");
addItemToCart("orange");
viewCart();
removeItemFromCart("banana");
viewCart();
clearCart();
viewCart();
