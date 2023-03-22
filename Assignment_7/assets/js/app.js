//-------------------------- Assignment No 07 ----------------------------------//
// // //-------------------------- Chapter 26 to 30 ----------------------------------------//

// document.write("<strong>Q1: Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number </strong>" + "<br>");
var userInput = prompt("Enter a positive integer:" , "3.45214");
var roundNum = Math.round(userInput);
var floorNum = Math.floor(userInput);
var ceilNum = Math.ceil(userInput);
document.write("Ans: Number: " + userInput + "<br><br>");
document.write("Ans: Round value: " + roundNum + "<br><br>");
document.write("Ans: Floor value: " + floorNum + "<br><br>");
document.write("Ans: Ceil value: " + ceilNum + "<br><br>");

// document.write("<strong>Q2:Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the numberc. floor value of the number d. ceil value of the number </strong>" + "<br>");
let userInputNegativeNumber = prompt("Enter a negative floating-point number:" , "-2.673");	
let roundNumNeg = Math.round(userInputNegativeNumber);
let floorNumNeg = Math.floor(userInputNegativeNumber);
let ceilNumNeg = Math.ceil(userInputNegativeNumber);
document.write("Ans: Number: " + userInputNegativeNumber + "<br><br>");
document.write("Ans: Round value: " + roundNumNeg + "<br><br>");
document.write("Ans: value: " + floorNumNeg + "<br><br>");
document.write("Ans: Ceil value: " + ceilNumNeg + "<br><br>");

// document.write("<strong>Q3:Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5</strong>" + "<br>");
var absUserInputNum = prompt("Enter a number: " , "-4");	
var absNum = Math.abs(absUserInputNum);
document.write("Ans: The absolute value of " + absUserInputNum + " is " + absNum + "<br><br>" );

// document.write("<strong>Q4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.</strong>" + "<br>");
var diceNumber = Math.floor(Math.random() * 6) + 1;	
// Display the dice value in the browser
document.write("Ans: The dice value is " + diceNumber + "<br><br>");

// document.write("<strong>Q5. Write a program that simulates a coin toss using random()method of JS Math class. Display the value of coin in your browser</strong>" + "<br>");
var tossCoin = Math.random();	
var coinValue = Math.round(tossCoin);
if(coinValue < 1) {
	document.write("Ans: The coin landed on Heads" + " " + coinValue + "<br><br>");	
}else {
	document.write("Ans: The coin landed on Tails" + " " + coinValue + "<br><br>");
}

// document.write("<strong>Q6. Write a program that shows a random number between 1 and 100 in your browser.</strong>" + "<br>");
var randomNumberGenerate = Math.floor(Math.random() * 100) + 1;    
document.write("random number between 1 and 100:" + " " + randomNumberGenerate + "<br><br>");

// document.write("<strong>Q7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms</strong>" + "<br>");
var weightUserInput = prompt("Please enter your weight:");
var weight = parseFloat(weightUserInput.replace(/[^0-9\.]/g, ""));
if (weightUserInput.toLowerCase().includes("kg") || weightUserInput.toLowerCase().includes("kilograms")) {
  weight *= 1; // No conversion necessary, as weight is already in kgs
} 
document.write("Ans: Your weight is " + weight.toFixed(1) + " kgs." + "<br><br>");