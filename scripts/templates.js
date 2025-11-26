function getDishesTemplate(i) {
    return /*html*/`
        <div class="dish">
            <div class="h3-btn-direction">
                <h3>${myDishes[i].name}</h3>
                <button id="toggleButtonClass${i}" onclick="addDishesToCart(${i})" class="add_btn"></button>
            </div>
            <p class="description">${myDishes[i].description}</p>
            <p class="price">${myDishes[i].price.toFixed(2)}€</p>
        </div>`
}

function getDishesToCartTemplate(i) {
    return /*html*/`
        <div class="cartDish">
            <h3 class="cart_H3">${myCart[i].name}</h3>
            <div class="btnInputDirection">
                <button onclick="minus(${i})" class="cart_btn_minus">-</button>
                <p>${myCart[i].amount}x</p>
                <button onclick="plus(${i})" class="cart_btn_plus">+</button>
                <p id="price${i}">${(myCart[i].price * myCart[i].amount).toFixed(2)}€</p>  
                <button onclick="deleteDishFromCart(${i})" class="cart_btn_delete">x</button>
            </div>
        </div> `   
}





