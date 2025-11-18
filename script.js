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
