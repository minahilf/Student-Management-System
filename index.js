import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let answer = await inquirer.prompt([
    {
        name: "nameOfStudent",
        type: "input",
        message: "Enter Student Name:",
    },
    {
        name: "courses",
        type: "list",
        message: "Select Your Desired Course:",
        choices: ["Graphic Designing", "Web Development", "Data Science", "Artificial Intelligence", "Freelancing"]
    }
]);
const coursesFees = {
    "Graphic Designing": 4000,
    "Web Development": 5000,
    "Data Science": 7000,
    "Artificial Intelligence": 10000,
    "Freelancing": 6000,
};
console.log(`Fees Structure: ${coursesFees[answer.courses]}`);
let balance = await inquirer.prompt([{
        name: "balance",
        type: "input",
        message: "Enter your current balance:"
    }]);
const userBalance = parseFloat(balance.balance);
const courseFee = coursesFees[answer.courses];
if (userBalance < courseFee) {
    console.log("Insufficient balance.");
}
else {
    const remainingBalance = userBalance - courseFee;
    console.log(`Payment Successful in ${answer.courses}. Remaining balance: ${remainingBalance}`);
}
function showStatus() {
    console.log(`Name of Student: ${answer.nameOfStudent}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Enrolled Course: ${answer.courses}`);
    console.log(`Fees Paid: ${courseFee}`);
}
showStatus();
