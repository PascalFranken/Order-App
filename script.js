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
   
function plus(i) {
    let currentValueRef = document.getElementById(`amount${i}`);
    let currentValue = currentValueRef.value;
    document.getElementById('btnPlus${i}');
    currentValue++;
    currentValue.value = currentValue;

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

