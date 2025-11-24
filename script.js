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
    document.getElementById('btnMinus${i}');
    const currentPriceValueRef = document.getElementById(`price${i}`);
    let currentPriceValue = currentPriceValueRef.value;
    const currentAmountValueRef = document.getElementById(`amount${i}`);
    let currentAmountValue = currentAmountValueRef.value;
    if (currentAmountValue <= 1) {
    myCart = myCart.filter((i) => {i !== i})
    }else{currentAmountValue--;
    currentAmountValueRef.value = currentAmountValue;
    }
    if (currentAmountValue >= 1) {
        currentPriceValue = currentAmountValue * myCart[i].price;
        currentPriceValueRef.value = currentPriceValue + "€";
        myPrices.push(currentPriceValue + "€");
    }
}

function calculateSum() {
    const currentSubtotalValueRef = document.getElementById('subtotal');
    const amountRef = document.getElementById('itemAmount');
    let costs = 0;
    let amount = 0;
    // const currentSumValueRef = document.getElementById('sum');
    // const currentSumValue = currentSumValueRef;
    // const currentPriceValueRef = document.getElementById(`price${i}`);
    // const currentPriceValue = currentPriceValueRef.value;
    for (let i = 0; i < myCart.length; i++) {
        costs += myCart[i].price * myCart[i].amount;
        amount += myCart[i].amount; 
        
    }
    currentSubtotalValueRef.innerText = costs.toFixed(2) + "€";
    amountRef.innerHTML = amount;
}

function deleteDishFromCart(i) {
    document.getElementById(`btnDelete${i}`);
    // myCart.splice(i, 1);
    // renderCartWithCurrentValues();
    myCart.filter((i) => i !== i);
}



function openResponsiveBasketDialog() {
    const dialog = document.getElementById('responsiveDialog');
    dialog.showModal();
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

