function renderDishes() {
    const dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += getDishesTemplate(i);
    }
}

function addDishes(i) {
    // const cartRef = document.getElementById('cart${i}');
    // cartRef.innerHTML = "";

    myDishes[i].cart.push()
}
