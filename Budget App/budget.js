const budget = document.querySelector("#budget")
const budgetButton = document.querySelector("#budget-button")
const expenseName = document.querySelector("#expense-name")
const expenseAmount = document.querySelector("#expense-amount")
const expenseButton = document.querySelector("#expense-button")
const totalBudget = document.querySelector("#total-budget")
const totalExpense = document.querySelector("#total-expense")
const totalBalance = document.querySelector("#total-balance")
const balanceValue = document.querySelector("#balance-value")
const expenseValue = document.querySelector("#expense-value")
const budgetValue = document.querySelector("#budget-value")
const totalExpenseValue = document.querySelector("#total-expenseValue")


//Get budget Value function
budgetButton.addEventListener("click", function () {
    const enteredBudget = parseFloat(budget.value);
    if (!isNaN(enteredBudget)) {
        budgetValue.innerText = enteredBudget;
        balanceValue.innerText = enteredBudget;
        budget.value = "";
    } else {
        alert("Please enter a valid budget amount.");
    }
})

//Set Expense Area
expenseButton.addEventListener("click", function () {
    const enteredExpenseAmount = parseFloat(expenseAmount.value)
    if (!isNaN(enteredExpenseAmount)) {
        const currentBalance = parseFloat(balanceValue.innerText)
        if (!isNaN(currentBalance) && currentBalance >= enteredExpenseAmount) {
            const newBalance = currentBalance - enteredExpenseAmount;
            balanceValue.innerText = newBalance;
            totalExpenseValue.innerText = enteredExpenseAmount

            //Create list Item
            
            expenseName.value = "";
            expenseAmount.value = "";
        } else {
            // Display an alert if the expense amount exceeds the available balance
            alert("Expense amount exceeds the available balance.");
        }
    } else {
        // Display an alert if the entered expense amount is not a valid number
        alert("Please enter a valid expense amount.");
    }
})