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
    Rent: "",
    Groceries: "",
    Gas: "",
    Utilities: "",
    Insurance: ""
};
//functions

const addIncome = () => {
    let newIncome = prompt("Enter the income amount you would like to add: ");
    income.push(newIncome);
}
const addExpense = () => {
    let addExpenseCategory = prompt("Enter the category of the expense you would like to add: ");
    //add an if statement to check if the entered category is a valid input/exists in the object
    let newExpense = Number(prompt("Enter the amount you would like to add to the selected expense category: "));
    let existingExpense = 0;
    if (expenses[addExpenseCategory] !== "") {
       existingExpense = Number(expenses[addExpenseCategory]);
    } 
    expenses[addExpenseCategory] = newExpense + existingExpense;
    
}
//consider adding a while loop to this function??
const removeExpense = () => {
    let subExpenseCategory = prompt("Enter the category of the expense you would like to subtract from: ");
    //add an if statement to check if the entered category is a valid input/exists in the object
    let currentExpense = Number(expenses[subExpenseCategory]);
    if (currentExpense == 0) {
       console.log("Invalid category to subtract from!");
    } 
    let subExpense = Number(prompt("Enter the amount you would like to subtract from the selected expense category: "));
    expenses[subExpenseCategory] = currentExpense - subExpense;
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
const viewSummary = () => {
    viewIncome();
}
while(dontExit) {
    let userInput = prompt("Enter Option Number: ");
    if (userInput == 1) {
        addIncome();
    } else if (userInput == 2) {
        addExpense();
    } else if (userInput == 3) {
        removeExpense();
    } else if (userInput == 4) {
        viewExpenses();
    } else if (userInput == 5) {
        viewSummary();
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
