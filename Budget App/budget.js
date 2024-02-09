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
let expenses = []

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
    const enteredExpenseName = expenseName.value
    if (!isNaN(enteredExpenseAmount)) {
        const currentBalance = parseFloat(balanceValue.innerText)
        if (!isNaN(currentBalance) && currentBalance >= enteredExpenseAmount) {
            const newBalance = currentBalance - enteredExpenseAmount;
            balanceValue.innerText = newBalance;
            totalExpenseValue.innerText = enteredExpenseAmount

            //Create list Item create seprate li and span tag with style class add and after li append on span and then underlist append on li
            const li = document.createElement('li');
            const expenseNameSpan = document.createElement('span');
            const expenseAmountSpan = document.createElement('span');
            //Same as create edit and delete button amd push it into expenses array 

            //Edit Button
            const editAbleButton = document.createElement('button')
            editAbleButton.innerText = "Edit"
            editAbleButton.classList.add('edit-button');

            //Itrate Array throught Expense 
            function findExpenseIndexByNameAndAmount(name, amount) {
                for (let i = 0; i < expenses.length; i++) {
                    if (expenses[i].name === name && expenses[i].amount === amount) {
                        return i;
                        
                    }
                }
                return -1;
            }

            function editExpense(name, amount) {
                const index = findExpenseIndexByNameAndAmount(name, amount)
                if (index !== -1) {
                    const newExpenseName = prompt("Enter the new expense name:", expenses[index].name);
                    const newExpenseAmount = parseFloat(prompt("Enter the new expense amount:", expenses[index].amount));

                    if (newExpenseName !== null && !isNaN(newExpenseAmount)) {
                        expenses[index].name = newExpenseName;
                        expenses[index].amount = newExpenseAmount;

                        // Update the DOM to reflect the changes
                        const expenseNameSpan = document.querySelectorAll('.expense-name')[index];
                        const expenseAmountSpan = document.querySelectorAll('.expense-amount')[index];
                        expenseNameSpan.innerText = newExpenseName;
                        expenseAmountSpan.innerText = `$${newExpenseAmount}`;
                    }
                } else {
                    alert("Expense not found.");
                }
            }

            // Event listener for edit button click
            document.addEventListener('click', function (event) {
                if (event.target.classList.contains('edit-button')) {
                    const listItem = event.target.parentElement;
                    const expenseName = listItem.querySelector('.expense-name').innerText;
                    const expenseAmount = parseFloat(listItem.querySelector('.expense-amount').innerText.replace('$', ''));
                    editExpense(expenseName, expenseAmount);
                }
            });
            //Delete Button
            const deleteButton = document.createElement('button')
            deleteButton.innerText = "Delete"
            deleteButton.classList.add('delete-button');

            expenseNameSpan.innerText = enteredExpenseName;
            expenseAmountSpan.innerText = `$${enteredExpenseAmount}`;
            expenseNameSpan.classList.add('expense-name');
            expenseAmountSpan.classList.add('expense-amount');

            li.appendChild(expenseNameSpan);
            li.appendChild(expenseAmountSpan);
            li.appendChild(editAbleButton);
            li.appendChild(deleteButton);

            const underList = document.querySelector('#underList');
            underList.appendChild(li);
            expenses.push({ name: enteredExpenseName, amount: enteredExpenseAmount, editButton: editAbleButton, deleteButton: deleteButton });
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