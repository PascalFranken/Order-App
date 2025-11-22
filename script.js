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
    const currentSubtotalValueRef = document.getElementById('subtotal');
    let currentSubtotalValue = currentSubtotalValueRef.value;
    currentSubtotalValue = myCart.price;
}

function renderCartWithCurrentValues() {
    
    const cartRef = document.getElementById('cart');
    cartRef.innerHTML = "";
    for (let i = 0; i < myCart.length; i++) {
    cartRef.innerHTML += getCartWithCurrentValuesTemplate(i);
    }
}
   
function plus(i) {
    document.getElementById('btnPlus${i}');
    const currentPriceValueRef = document.getElementById(`price${i}`);
    let currentPriceValue = currentPriceValueRef.value;
    const currentAmountValueRef = document.getElementById(`amount${i}`);
    let currentAmountValue = currentAmountValueRef.value;
    currentAmountValue++;
    currentAmountValueRef.value = currentAmountValue;
    if (currentAmountValue > 1) {
      currentPriceValue = currentAmountValue * myCart[i].price;
        currentPriceValueRef.value = currentPriceValue + "€";
        myPrices.push(currentPriceValue + "€")
    }
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

function calculateSum(i) {
    const currentSubtotalValueRef = document.getElementById('subtotal');
    const currentSubtotalValue = currentSubtotalValueRef.value;
    const currentSumValueRef = document.getElementById('sum');
    const currentSumValue = currentSumValueRef;
    const currentPriceValueRef = document.getElementById(`price${i}`);
    const currentPriceValue = currentPriceValueRef.value;
    for (let i = 0; i < myPrices.length; i++) {
        const currentSubtotalValue = myPrices[i];
        currentSubtotalValueRef.value = current;
        
    }
    
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

function openBasketDialog() {
    const openDialog = document.getElementById('dialog');
    openDialog.showModal();
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

