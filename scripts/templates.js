function getDishesTemplate(i) {
    return /*html*/`
        <div id = "dishContainer" class = "dish">
            <div class = "h3-btn-direction">
                <h3>${myDishes[i].name}</h3>
                <button onclick = addDishes(i) class = "addBtn">+</button>
            </div>
            <p class = "description">${myDishes[i].description}</p>
            <p class = "price">${myDishes[i].price.toFixed(2)}€</p>
        </div>
    `
}