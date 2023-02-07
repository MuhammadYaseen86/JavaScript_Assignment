// // //-------------------------- Assignment No 04 ----------------------------------//
// // //-------------------------- USER INPUT & CONDITIONAL STATEMENT ----------------------------------//
// // //-------------------------- Chapter 9 to 11 ----------------------------------------//

document.write("<strong>Q1: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”</strong>" + "<br>");
var cityName = prompt("Enter city name");
if(cityName == "Karachi") {
	document.write("<strong>Ans: “Welcome to city of lights”</strong>" + " " + "<strong>"+ cityName +"</strong>" + "<br><br>");	
}

document.write("<strong>Q2: Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.</strong>" + "<br>");
var userGender = prompt("Enter your gender");
if(userGender == "male") {
	document.write("<strong>Ans: Good Morning Sir.</strong>" + " " + "<br><br>");	
}else if(userGender == "female") {
	document.write("<strong>Ans: Good Morning Ma’am.</strong>" + " " + "<br><br>");
}

document.write("<strong>Q3: Write a program to take input color of road traffic signal from the user & show the message according to this table:</strong>" + "<br>");

var redColor = prompt("Enter red color here");
var yellowColor = prompt("Enter yellow here");
var greenColor = prompt("Enter green here");
document.write("<table><thead><tr><th>Singal</th><th>Mesagae</th></tr></thead> <tbody><tr><td>"+redColor+"</td><td>Must Stop</td></tr><tr><td>"+yellowColor+"</td><td>Ready to Move</td></tr><tr><td>"+greenColor+"</td><td>Move now</td></tr></tbody></table></table>")

document.write("<strong>Q4: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”</strong>" + "<br>");
var remainingFuel = +prompt("Enter remaining fuel");
if(remainingFuel < 0.25) {
	document.write("<strong>Ans: Please refill the fuel in your car </strong>" + " " + "<br><br>");	
}else {
	document.write("<strong>Ans: The fuel is update in your car</strong>" + " " + "<br><br>");
}

document.write("<strong>Q5: Run this script, & check whether alert message would be displayed or not. Record the outputs.</strong>" + "<br>");
var a = 4;
if (++a === 5){
	alert("given condition for variable A is true");
}
var b = 82;
if (b++ === 83){
	alert("given condition for variable b is true" );
}
var c = 12;
if (c++ === 13){
	alert("condition 1 is true");
}
if (c === 13){
	alert("condition 2 is true");
}
if (++c < 14){
	alert("condition 3 is true");
}
if(c === 14){
	alert("condition 4 is true");
}
var laborCost = 2000;
var materialCost = 0;
var laborCost = 0;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
	alert("The cost equals");
}
if (true) {
	alert("True");
}
if (false) {
	alert("False");
}

if("car" < "cat") {
	alert("car is smaller than cat");
}
document.write("<strong>Ans: Condition for variable A is true, condition 2 is true, condition 4 is true,car is smaller than cat</strong>" + "<br><br>");

document.write("<strong>Q6: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:</strong>" + "<br>");
var subjectOneObtMarks = +prompt("Enter subject one obtained marks here");
var subjectTwoObtMarks = +prompt("Enter subject two obtained marks here");
var subjectThreeObtMarks = +prompt("Enter subject three obtained marks here");
var totalSubjectObtMarks = subjectOneObtMarks + subjectTwoObtMarks + subjectThreeObtMarks;
var totalSubjectPercentage = (subjectOneObtMarks + subjectTwoObtMarks + subjectThreeObtMarks) / 300 * 100;
document.write("<table><thead><tr><th>Percentage</th><th>Grade</th><th>Remarks</th></tr></thead> <tbody><tr><td>Greater than or equal to 80</td><td>A-one</td><td>Excellent</td></tr><tr><td>Greater than or equal to 70</td><td>A</td><td>Good</td></tr><tr><td>Greater than or equal to 60</td><td>B</td><td>You need to improve</td></tr><tr><td>Less than 60</td><td>Fail</td><td>Sorry</td></tr></tbody></table></table>");
document.write("<strong>Show the total marks, marks obtained, percentage, grade & remarks like:</strong>" + "<br>");
document.write("<div class='marks-sheet-table'>");
document.write("<h1>Marks Sheet</h1>" + "<br><br>");
if(totalSubjectPercentage >= 80) {
	document.write("<strong>Total Marks:</strong>" + " "  + 300 + "<br>" );
	document.write("<strong>Obtained Marks:</strong>" + " "  + totalSubjectObtMarks + "<br>" );
	document.write("<strong>Percentage:</strong>" + " "  + totalSubjectPercentage + "%" + "<br>" );
	document.write("<strong>Grade:</strong>" + " A-one " + "<br>" );
	document.write("<strong>Remarks:</strong>" + "  Excellent  "  + "<br><br>" );
}else if(totalSubjectPercentage >= 70) {
	document.write("<strong>Total Marks:</strong>" + " "  + 300 + "<br>" );
	document.write("<strong>Obtained Marks:</strong>" + " "  + totalSubjectObtMarks + "<br>" );
	document.write("<strong>Percentage:</strong>" + " "  + totalSubjectPercentage + "%" +  "<br>" );
	document.write("<strong>Grade:</strong>" + " A " + "<br>" );
	document.write("<strong>Remarks:</strong>" + "  Good  "  + "<br><br>" );
}else if(totalSubjectPercentage >= 60) {
	document.write("<strong>Total Marks:</strong>" + " "  + 300 + "<br>" );
	document.write("<strong>Obtained Marks:</strong>" + " "  + totalSubjectObtMarks + "<br>" );
	document.write("<strong>Percentage:</strong>" + " "  + totalSubjectPercentage + "%" + "<br>" );
	document.write("<strong>Grade:</strong>" + " B " + "<br>" );
	document.write("<strong>Remarks:</strong>" + "  You need to improve  "  + "<br><br>" );
}else if(totalSubjectPercentage < 60) {
	document.write("<strong>Total Marks:</strong>" + " "  + 300 + "<br>" );
	document.write("<strong>Obtained Marks:</strong>" + " "  + totalSubjectObtMarks + "<br>" );
	document.write("<strong>Percentage:</strong>" + " "  + totalSubjectPercentage + "%" +  "<br>" );
	document.write("<strong>Grade:</strong>" + " F " + "<br>" );
	document.write("<strong>Remarks:</strong>" + "  Sorry  "  + "<br><br>" );
}
document.write("</div>");


document.write("<strong>Q7:Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.</strong>" + "<br>");
document.write("<strong>a) If user guesses the same number, show “Bingo! Correct answer”.</strong>" + "<br>");
document.write("<strong>b) If the guessed number +1 is the secret number, show “Close enough to the correct answer”.</strong>" + "<br>");

var secretNumber = 5;
var userInsertNum = +prompt("Enter a number between 1 and 10");
if(secretNumber === userInsertNum) {
	alert("Bingo! Correct answer");
}else if( userInsertNum === 6 ) {
	//++secretNumber;
	alert("Close enough to the correct answer");
}else {
	alert("Try Again");
}

document.write("<strong>Q8: Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.</strong>" + "<br>");
var divisibleNum = +prompt("Enter a number divisible");
if( divisibleNum % 3 == 0) {
   document.write("<strong>Ans: The number is divisible by three </strong>" + "<br><br>");
}else {
	document.write("<strong>Ans: The number is not divisible by three </strong>" + "<br><br>");
}

document.write("<strong>9: Write a program that checks whether the given input is an even number or an odd number.</strong>" + "<br>");
// var secretNumber = 5;
var checkEvenOrOdd = +prompt("Enter a number we check it is even or odd");
if( checkEvenOrOdd % 3 == 0) {
   document.write("<strong>Ans: The number is even</strong>" + "<br><br>");
}else {
	document.write("<strong>Ans: The number is odd</strong>" + "<br><br>");
}

document.write("<strong>Q10: Write a program that checks whether the given input is an even number or an odd number." + "<br>" );
document.write("<strong>a:) T > 40 then “It is too hot outside.”" + "<br>" );
document.write("<strong>b:) T > 30 then “The Weather today is Normal.”" + "<br>" );
document.write("<strong>c:) T > 20 then “Today’s Weather is cool.”" + "<br>" );
document.write("<strong>d:) T > 10 then “OMG! Today’s weather is so Cool.”" + "<br>" );

var temperature = +prompt("Enter a number we check it is even or odd");
if( temperature > 40 ) {
   document.write("<strong>Ans: It is too hot outside.</strong>" + "<br><br>");
}else if( temperature > 30 ) {
	document.write("<strong>Ans: The Weather today is Normal.</strong>" + "<br><br>");
}else if( temperature > 20 ) { 
	document.write("<strong>Ans: Today’s Weather is cool.</strong>" + "<br><br>");
}else if( temperature > 10 ) {
	document.write("<strong>Ans: OMG! Today’s weather is so Cool.</strong>" + "<br><br>");
}

document.write("<strong>Q11:Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:" + "<br>" );
document.write("<strong>a:) First number" + "<br>" );
document.write("<strong>b:) Second number" + "<br>" );
document.write("<strong>c:) Operation (+, -, *, /, %) Compute & show the calculated result to user." + "<br>" );
var firstNum = +prompt("Enter a first number");
var opertaor = prompt("Enter a operator");
var secondNum = +prompt("Enter a second number");
var result;
if( opertaor === "+" ) {
   result = firstNum + secondNum;
}else if( opertaor === "-" ) {
	result = firstNum + secondNum;
}else if( opertaor === "*" ) { 
	result = firstNum * secondNum;
}else if( opertaor === "/" ) {
	result = firstNum / secondNum;
}else if( opertaor === "%" ) {
	result = firstNum % secondNum;
}
document.write("<strong>Ans: Your Ans is two numbers </strong>" + firstNum + opertaor  + secondNum  + " = " + result  + "<br><br>");

// //-------------- IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS -------//
// //-------------------------- Chapter 12 t0 13  ----------------------------------------//

document.write("<strong>Q1: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCIIcodes:- A=65, Z=90, a=97, z=122)." + "<br>" );
var checkAsciiCodes = prompt("Enter a A or Z letter");
if (checkAsciiCodes >= 'A' && checkAsciiCodes <= 'Z') {
	document.write("<strong>Ans: Input is Uppercase </strong>" + "<br><br>");
}else if (checkAsciiCodes >= 'a' && checkAsciiCodes <= 'z') {
	document.write("<strong>Ans:Input is Lowercase </strong>" + "<br><br>");
}

document.write("<strong>Q2: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal." + "<br>" );
var inputNumberOne = +prompt("Enter first number:");
var inputNumberTwo = +prompt("Enter second number:");
if (inputNumberOne == inputNumberTwo) {
    document.write(inputNumberOne + "<strong>is equal to</strong>" + " " + "<strong>"+ inputNumberTwo +"</strong>" + "<br><br>" );
} else if (inputNumberOne > inputNumberTwo) {
    // console.log(inputNumberOne + "  " + inputNumberTwo);
    document.write(inputNumberOne  + " +"  + "<strong>is larger than</strong>" + " " + "<strong>"+ inputNumberTwo +"</strong>" + "<br><br>" );
} else {
    document.write(inputNumberOne  + " "  + "<strong> is lesser than  </strong>" + " " + "<strong>"+ inputNumberTwo +"</strong>" + "<br><br>" );
}

document.write("<strong>Q3: Write a program that takes input a number from user & state whether the number is positive, negative or zero." + "<br>" );
var checkNumType = +prompt("Enter number here:");
if (checkNumType > 0) {
    document.write(checkNumType  + " "  + "<strong> number is positive  </strong>" + "<br><br>" );
}else if (checkNumType == 0) {
  document.write(checkNumType  + " "  + "<strong>  number is zero </strong>" + "<br><br>" );
}else {
    document.write(checkNumType  + " "  + "<strong> number is negative </strong>" + "<br><br>" );
}

document.write("<strong>Q4: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise" + "<br>" );
var checkIsVowel = prompt("Enter vowel character here:");
if ( checkIsVowel === 'a'||'e'||'i'||'o'||'u' ) {
  document.write(checkIsVowel  + " "  + "<strong> character is a Vowel </strong>" + "<br><br>" );
}else {
    document.write(checkIsVowel  + " "  + "<strong> character is a Consonant </strong>" + "<br><br>" );
}

document.write("<strong>Q5: Write a program that" + "<br>" );
document.write("<strong>a:) a. Store correct password in a JS variable." + "<br>" );
document.write("<strong>b:) b. Asks user to enter his/her password”." + "<br>" );
document.write("<strong>c:)  Validate the two passwords:" + "<br>" );
document.write("<strong>i:) Check if user has entered password. If not, then give message “ Please enter your password”" + "<br>" );
document.write("<strong>ii:)  Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise." + "<br>" );

correcPassword = 1234;
var userEnterPassword = +prompt("Enter your password");
if(userEnterPassword === 0) {
	alert("Please Enter Password");
}else if(userEnterPassword !== correcPassword) {
	alert("Your password is not corect");
}else if(correcPassword === userEnterPassword ) {
	alert("Correct! password you entered matches the original password");
}

document.write("<strong>Q6: This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = Good day; else greeting = Good evening; }" + "<br>" );
var greeting;
var hour = 13;
if (hour < 18) {
	greeting = "Good day";	
	alert(greeting)
}
else {
	greeting = "Good evening";
	alert(greeting)
}

document.write("<strong>Q7: Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements" + "<br>" );
var userInsertTime = +prompt("Enter time in clock format like: 1900 ");

if( userInsertTime >= 0 && userInsertTime < 1200 ) {
	alert("Good Morning")
}else if( userInsertTime >= 1200 && userInsertTime < 1700 ) {
	alert("Good Afternoon")
}else if( userInsertTime >= 1700 && userInsertTime < 2100 ) {
	alert("Good Eve")
}else if( userInsertTime >= 2100 && userInsertTime < 2359 ) {
	alert("Good night")
}
