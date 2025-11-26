function renderDishes() {
    const dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";
    for (let i = 0; i < myDishes.length; i++) {
        dishesRef.innerHTML += getDishesTemplate(i);
    }
}

function addDishesToCart(i) {
    const dish = myDishes[i];
    const dishCopy = myCart.findIndex(element => element.name === dish.name);
    if (dishCopy >= 0) {
        myCart[dishCopy].amount++;
    }else{
        myCart.push(Object.assign({},dish, {amount: 1}));
    } 
    renderDishesToCart();
}   

function renderDishesToCart() {
    const cartRef = document.getElementById('cart');
    cartRef.innerHTML = "";
    for (let i = 0; i < myCart.length; i++) {
    cartRef.innerHTML += getDishesToCartTemplate(i);
    }
    calculateSum();
}

function plus(i) {
    myCart[i].amount++;
    renderDishesToCart();
}

function minus(i) {
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
    const clearSum = document.getElementById('sum');
    const clearSubtotal = document.getElementById('subtotal');
    const clearBasket = document.getElementById('cart');
    myCart.splice(i, 1);
    renderDishesToCart();
    if (clearBasket.innerHTML == "") {
        clearSubtotal.innerText = "0€";
        clearSum.innerText = "0€";
    }
}

function openBasketDialog() {
    const resetAmount = document.getElementById('itemAmount')
    const clearSum = document.getElementById('sum');
    const clearSubtotal = document.getElementById('subtotal');
    const clearBasket = document.getElementById('cart');
    const submitDialog = document.getElementById('dialog');
    submitDialog.showModal();
    myCart.length = 0;
    clearBasket.innerHTML = "";  
    clearSubtotal.innerText = "0€";
    clearSum.innerText = "0€";
    resetAmount.innerText = 0;
}

function openResponsiveBasket() {
    let openDialog = document.getElementById('open');
    openDialog.classList.toggle('d_none');
    hideDishButtons();
}

function closeBasket() {
    const toggleBasketText = document.getElementById('toggleBasketText');
    const openDialog = document.getElementById('open');
    openDialog.classList.add('d_none');
    toggleBasketText.innerText = "Warenkorb öffnen";
    showDishButtons();
}

function toggleResponsiveBasketFont() {
    const toggleBasketText = document.getElementById('toggleBasketText');
    if (toggleBasketText.innerText == "Warenkorb öffnen") {
        toggleBasketText.innerText = "Warenkorb schließen";  
    }else if(toggleBasketText.innerText == "Warenkorb schließen"){
             showDishButtons();
             toggleBasketText.innerText = "Warenkorb öffnen";
    }
}

function closeSubmitDialog() {
    const closeDialog = document.getElementById('dialog');
    closeDialog.close();
}

function closeSubmitDialogWithButton() {
    const closeDialogWithButton = document.getElementById('dialog');
    closeDialogWithButton.close();
}

function bubblingProtection(event) {
    event.stopPropagation();
} 

function hideDishButtons() {
    const buttons = document.querySelectorAll('.add_btn');
    buttons.forEach(btn => btn.style.display = 'none');
}

function showDishButtons() {
    const buttons = document.querySelectorAll('.add_btn');
    buttons.forEach(btn => btn.style.display = 'flex');
}