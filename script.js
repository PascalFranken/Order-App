function renderDishes() {
    const dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += getDishesTemplate(i);
    }
}

function addDishesToCart(i) {
    myCart.push(myDishes[i]);
    renderDishesToCart();
}

function renderDishesToCart() {
    const cartRef = document.getElementById('cart');
    cartRef.innerHTML = "";

    for (let i = 0; i < myCart.length; i++) {
        cartRef.innerHTML += getDishesToCartTemplate(i);
    }
}

function amount(i) {
    const minusRef = document.getElementById('btnMinus${i}');
    const plusRef = document.getElementById('btnPlus${i}');
    const amountRef = document.getElementById('amount${i}');
    amountRef = amountRef.value;

    plusRef.amountRef.value++;
    minusRef.amountRef.value--;

}
