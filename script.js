function renderDishes() {
    const dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += getDishesTemplate(i);
    }
}

function addDishesToCart(i) {

     if(myCart[i] == myDishes[i]){
        plus(i);
       }
    
   else if (myDishes[i]) {
        myCart.push(myDishes[i]);
        renderDishesToCart(i);      
    }      
}   

function renderDishesToCart() {
    
    const cartRef = document.getElementById('cart');
    cartRef.innerHTML = "";
    for (let i = 0; i < myCart.length; i++) {
    cartRef.innerHTML += getDishesToCartTemplate(i);
    }
    calculateSum();
    // const currentSubtotalValueRef = document.getElementById('subtotal');
    // let currentSubtotalValue = currentSubtotalValueRef.value;
    // currentSubtotalValue = myCart.price;
}

function renderCartWithCurrentValues() {
    
    const cartRef = document.getElementById('cart');
    cartRef.innerHTML = "";
    for (let i = 0; i < myCart.length; i++) {
    cartRef.innerHTML += getCartWithCurrentValuesTemplate(i);
    }
}
   
function plus(i) {
    myCart[i].amount++;
    renderDishesToCart();
}

function minus(i) {
    // const currentAmountValueRef = document.getElementById(`amount${i}`);
    // let currentAmountValue = currentAmountValueRef.value;
    if (myCart[i].amount <= 1) {
    deleteDishFromCart(i);
    }else{myCart[i].amount--;
        renderDishesToCart();
    }
}

function calculateSum() {
    const currentSubtotalValueRef = document.getElementById('subtotal');
    const amountRef = document.getElementById('itemAmount');
    const currentSumValueRef = document.getElementById('sum');
    let costs = 0;
    let amount = 0;
    let sum = 0;
    for (let i = 0; i < myCart.length; i++) {
        costs += myCart[i].price * myCart[i].amount;
        amount += myCart[i].amount;   
    }
    currentSubtotalValueRef.innerText = costs.toFixed(2) + "€";
    amountRef.innerHTML = amount;
    sum += costs + 5;
    currentSumValueRef.innerText = sum.toFixed(2) + "€";
}

function deleteDishFromCart(i) {
    myCart.splice(i, 1);
    renderDishesToCart();
}

function openBasketDialog() {
    const submitDialog = document.getElementById('dialog');
    submitDialog.showModal();
}

function openBasket() {
    const openDialog = document.getElementById('open');
    openDialog.classList.toggle('d_none');
}

function closeResponsiveDialog() {
    const closeDialog = document.getElementById('responsiveDialog');
    closeDialog.close();
}

function closeBasketDialog() {
    const closeDialog = document.getElementById('dialog');
    closeDialog.close();
}

function bubblingProtection(event) {
    event.stopPropagation();
}


    




// myCart[i].amount +1
// currentAmountValue--;
//     currentAmountValueRef.value = currentAmountValue;
