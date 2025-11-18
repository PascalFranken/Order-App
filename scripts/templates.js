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
            <h3>${myCart[i].name}</h3>
            <button></button>
            <button></button>
            <button></button>
        </div> `   
}
