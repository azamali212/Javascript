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
let amount = 0

//Get budget Value function
budgetButton.addEventListener("click",function(){
    budgetValue.innerText = budget.value
    balanceValue.innerText = budget.value
    budget.value = ""
    
})