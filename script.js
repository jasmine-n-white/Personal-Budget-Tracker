const prompt = require("prompt-sync")({sigint: true});

console.log("Welcome to the Personal Budget Tracking Application!");
console.log("====================================================");
console.log("Choose an option: ");
console.log("1. Add income");
console.log("2. Add expenses");
console.log("3. Remove expenses");
console.log("4. View transactions");  //income array and expenses 
console.log("5. View summary"); //total income, total expenses, balance
console.log("6. Exit the program");
console.log("====================================================");
console.log("\n");

let dontExit = true;
let income = [];
let expenses = {
    rent: 0,
    groceries: 0,
    utilities: 0,
};
let incomeSum;
let expenseSum;
//functions

const addIncome = () => {
    let newIncome = prompt("Enter the income amount you would like to add to: ");
    income.push(newIncome);
}
const addExpense = () => {
    let addExpenseCategory = prompt("Enter the category of the expense you would like to add: ");
    if (expenses.hasOwnProperty(addExpenseCategory)) {
    let newExpense = Number(prompt("Enter the amount you would like to add to the selected expense category: "));
    let existingExpense = 0;
    if (expenses[addExpenseCategory] !== 0) {
       existingExpense = Number(expenses[addExpenseCategory]);
    } 
    expenses[addExpenseCategory] = newExpense + existingExpense;
} else {
    console.log("Invalid category!");
}
    
}
//consider adding a while loop to this function??
const removeExpense = () => {
    let subExpenseCategory = prompt("Enter the category of the expense you would like to subtract from: ");
    let currentExpense = Number(expenses[subExpenseCategory]);
    if (!expenses.hasOwnProperty(subExpenseCategory) || currentExpense == 0) {
        console.log("Invalid category to subtract from!");
    } else {
    let subExpense = Number(prompt("Enter the amount you would like to subtract from the selected expense category: "));
    if (subExpense > currentExpense) {
        console.log("Invalid value! The amount you want to subtract must be less than or equal to the current expense value.");
    } else {
        expenses[subExpenseCategory] = currentExpense - subExpense;
    }
    } 
}
const viewExpenses = () => {
    Object.keys(expenses).forEach(key => {
        console.log(`${key}: ${expenses[key]}`);
    });
    
}
const viewIncome = () => {
    console.log("Income: ");
    if (income.length == 0) {
        console.log("No income!");
    }
    for (let i = 0; i < income.length; i++) {
        console.log(income[i]);
    }
    
}
const totalIncome = () => {
    let allIncome = 0;
    for(i=0; i<income.length; i++) {
        allIncome += Number(income[i]);
    }
    incomeSum = allIncome;
    console.log(`Total Income: ${allIncome}`);
    return incomeSum;

}
const totalExpenses = () => {
    let allExpenses = 0;
    for(let key in expenses) {
        allExpenses += Number(expenses[key]);
    }
    expenseSum = allExpenses;
    console.log(`Total Expenses: ${allExpenses}`);
    return expenseSum;
}
const viewSummary = () => {
    totalIncome();
    totalExpenses();
    console.log(`Remaining Balance: ${incomeSum - expenseSum}`);
}
while(dontExit) {
    let userInput = prompt("Enter Option Number: ");
    if (userInput == 1) {
        console.log("====================================================");
        addIncome();
        console.log("====================================================");
    } else if (userInput == 2) {
        console.log("====================================================");
        addExpense();
        console.log("====================================================");
    } else if (userInput == 3) {
        console.log("====================================================");
        removeExpense();
        console.log("====================================================");
    } else if (userInput == 4) {
        console.log("====================================================");
        viewExpenses();
        console.log("----------------------------------------------------");
        viewIncome();
        console.log("====================================================");
    } else if (userInput == 5) {
        console.log("====================================================");
        viewSummary();
        console.log("====================================================");
    } else if (userInput == 6) {
        dontExit = false;
        console.log("=========");
        console.log("GOODBYE!!");
        console.log("=========");
        break;
    }
}
//if option 1
//add income
//if option 2
//remove income
//
//arrays for income entries
//objects for expense entries

//six functions

//add income
//add expense
//remove expense
//view expense statement
//view summary

//use a loop

//add income
//add expenses
//remove expenses
//view transactions
//view summary
//exit
