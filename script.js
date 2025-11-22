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
    }
}

function minus(i) {
    document.getElementById('btnMinus${i}');
    const currentPriceValueRef = document.getElementById(`price${i}`);
    let currentPriceValue = currentPriceValueRef.value;
    const currentAmountValueRef = document.getElementById(`amount${i}`);
    let currentAmountValue = currentAmountValueRef.value;
    if (currentAmountValue < 1) {
    myCart.splice(i, 1);
    }else{currentAmountValue--;
    currentAmountValueRef.value = currentAmountValue;
    }
    if (currentAmountValue >= 1) {
        currentPriceValue = currentAmountValue * myCart[i].price;
        currentPriceValueRef.value = currentPriceValue.toFixed(2) + "€";
    }
}

function calculateSum(i) {
    document.getElementById('subtotal');
    document.getElementById('sum');
    const currentPriceValueRef = document.getElementById(`price${i}`);
    const currentPriceValue = currentPriceValueRef.value;
    if (currentAmountValue >= 1) {
        currentPriceValue
    }
}

function deleteDishFromCart(i) {
    document.getElementById(`btnDelete${i}`);
    myCart.splice(i, 1);
    renderCartWithCurrentValues();
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

