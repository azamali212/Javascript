let totalAmount = document.getElementById('total-amount')
let userAmount = document.getElementById('user-amount')
let checkAmountButton = document.getElementById('check-amount')
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

//Budged functionality
totalAmountButton.addEventListener('click', function () {
    tempAmount = totalAmount.value
    if (tempAmount === "" || tempAmount < 0) {
        errorMessage.classList.remove("hide");
    }else{
        errorMessage.classList.add("hide");
        //Set Amount 
        amount.innerHTML = tempAmount
    }
})