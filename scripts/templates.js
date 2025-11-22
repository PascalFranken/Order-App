function getDishesTemplate(i) {
    return /*html*/`
        <div class = "dish">
            <div class = "h3-btn-direction">
                <h3>${myDishes[i].name}</h3>
                <button onclick = "addDishesToCart(${i})" class = "addBtn">+</button>
            </div>
            <p class = "description">${myDishes[i].description}</p>
            <p class = "price">${myDishes[i].price.toFixed(2)}€</p>
        </div>`
}

function getDishesToCartTemplate(i) {
    return /*html*/`
        <div class = "cartDish">
            <h3 class = "cartH3">${myCart[i].name}</h3>
            <div class = "btnInputDirection">
                <button onclick = "minus()" id = "btnMinus${i}" class = "cartBtnMinus">-</button>
                <input id = "amount${i}" value = ${myCart[i].amount}>
                <button onclick = "plus(${i})" id = "btnPlus${i}" class = "cartBtnPlus">+</button>
                <!-- <input id = "price${i}" type = "number">
                <button onclick = "amount(${i})" id = "btnDelete${i}" class = "cartBtnDelete">x</button> -->
            </div>
        </div> `   
}





