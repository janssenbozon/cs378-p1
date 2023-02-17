var foodCount = {"mac&cheese": 0, "steak": 0, "donuts": 0, "foccacia": 0};
var prices = {"mac&cheese": 5, "steak": 18, "donuts": 3, "foccacia": 7};
var subtotal = 0;

var plusButtons = document.querySelectorAll(".food-button-plus");

plusButtons.forEach((button) => button.addEventListener("click", incrementHandler));

var minusButtons = document.querySelectorAll(".food-button-minus");

minusButtons.forEach((button) => button.addEventListener("click", decrementHandler));

var foodCountDisplay = document.querySelectorAll(".food-button-text")

var clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", clearAllHandler);

var clearButton = document.getElementById("order-button")

clearButton.addEventListener("click", orderHandler);

function incrementHandler() {
    let itemName = this.id;
    foodCount[itemName]++;
    subtotal += prices[itemName];
    updateText(itemName);
}

function decrementHandler() {
    let itemName = this.id;
    if(foodCount[itemName] == 0) {
        alert("You can't get negative items!");
    } else {
        foodCount[itemName]--;
        subtotal -= prices[itemName];
    }
    updateText(itemName);
}

function updateText(itemName) {
    let textId = itemName + "-text";
    document.getElementById(textId).innerHTML = foodCount[itemName];
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
}

function orderHandler() {
    // list items

    if(subtotal > 0) {
        alert("Order placed!\n" + foodCount["mac&cheese"] + " mac&cheese, " + foodCount["steak"] + " steak, " + foodCount["donuts"] + " donuts, "+ foodCount["foccacia"] + " foccacia")
    } else {
        alert("Your cart is empty!")
    }


    // OR cart empty
}

function clearAllHandler() {

    subtotal = 0;
    let keys = Object.keys(foodCount);

    keys.forEach((key) => {
        foodCount[key] = 0;
        updateText(key);
    })
    
}