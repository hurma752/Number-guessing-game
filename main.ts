#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "Userguessednumber",
    type: "number",
    message: "Please guess a number. Hint: Number is between 1 and 6.",
  },
]);

if (answer.Userguessednumber === randomNumber) {
  console.log("You guessed right number.");
} else {
  console.log("You guessed wrong number");
}

console.log("The number was " + randomNumber);