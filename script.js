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
    rent: "",

};
let userInput;
let balance;
//functions

const addIncome = (income) => {
    let newIncome = prompt("Enter the income amount you would like to add: ");
    income.push(newIncome);
}
const addExpense = (expenses) => {
    // let newExpense = 
}
const removeExpense = () => {
    
}
const viewExpenses = () => {
    
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
    
}
while(dontExit) {
    userInput = prompt("Enter Option Number: ");
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
