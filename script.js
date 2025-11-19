function renderDishes() {
    const dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += getDishesTemplate(i);
    }
}

function addDishesToCart(i) {
    myCart.push(myDishes[i]);
    myCart[i].amount += 1;
    
    if (myCart[i].amount == 1) {
        
       
       
    }else{
         renderDishesToCart();

    }
}   


function renderDishesToCart() {
    const cartRef = document.getElementById('cart');
    cartRef.innerHTML = "";

    for (let i = 0; i < myCart.length; i++) {
        cartRef.innerHTML += getDishesToCartTemplate(i);
    }
}

// function plus() {
//     let count = document.getElementById('amount${i}');
    
//     document.getElementById('btnPlus${i}');
//     count++;
//     count.innerHTML = count;

// }


// myCart[i].amount +1