// //-------------------------- Assignment No 05 ----------------------------------//
// //-------------------------- MATH EXPRESSIONS ----------------------------------//
// //-------------------------- Chapter 5 ----------------------------------------//

document.write("<strong>Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.</strong>" + "<br>");
var num_1 = 10;
var num_2 = 5;
var sum = num_1 + num_2;
var subtraction = num_1 - num_2;
var multiplication = num_1 * num_2;
var division = num_1 / num_2;
document.write("<strong>Sum of 10 and 5 is:</strong>" + " " + "<strong>"+ sum +"</strong>" + "<br><br>" );

document.write("<strong>Q2: Repeat task1 for subtraction, multiplication, division & modulus..</strong>" + "<br>" );
document.write("<strong>Ans: Subtraction, of 10 and 5 is:</strong>" + " " + "<strong>"+ subtraction +"</strong>" + "<br>");
document.write("<strong>Ans: Multiplication, of 10 and 5 is:</strong>" + " " + "<strong>"+ multiplication +"</strong>" + "<br>");
document.write("<strong>Ans: Division of 10 and 5 is:</strong>" + " " + "<strong>"+ division +"</strong>" + "<br><br>" );

document.write("<strong>Q3: Do the following using JS Mathematic Expressions" + "<br>" );
document.write("<strong>a:) Declare a variable." + "<br>" );
var undefine = "undefine";
document.write("<strong>b:) Show the value of variable in your browser like “Value after variable declaration is: ??”." + "<br>" );
document.write("<strong>Ans: Value after variable declaration is:</strong>" + " " + "<strong>"+ undefine +"</strong>" + "<br><br>" );
document.write("<strong>c:) Initialize the variable with some number." + "<br>" );
document.write("<strong>d:) Show the value of variable in your browser like “Initial value: 5”." + "<br>" );
document.write("<strong>Ans: Initial Value:</strong>" + " " + "<strong>"+ num_2 +"</strong>" + "<br><br>" );
document.write("<strong>e:)  Increment the variable.." + "<br>" );
document.write("<strong>f:)  Show the value of variable in your browser like “Value after increment is: 6”." + "<br>" );
document.write("<strong>Ans: Value after increment:</strong>" + " " + "<strong>"+ ++num_2 +"</strong>" + "<br><br>" );
document.write("<strong>g:)  Add 7 to the variable." + "<br>" );
var num_3 = 7;
var total = num_2 + num_3;
document.write("<strong>h:)  Show the value of variable in your browser like “Value after addition is: 13”." + "<br>" );
document.write("<strong>Ans: Value after increment:</strong>" + " " + "<strong>"+ total +"</strong>" + "<br><br>" );
document.write("<strong>i:)  Decrement the variable." + "<br>" );
document.write("<strong>j:)  Show the value of variable in your browser like “Value after decrement is: 12”." + "<br>" );
document.write("<strong>Ans: Value after increment:</strong>" + " " + "<strong>"+ --total +"</strong>" + "<br><br>" );
document.write("<strong>K:)  Show the remainder after dividing the variable’s value by 3." + "<br>" );
document.write("<strong>L:)  Output : “The remainder is : 0”." + "<br>" );
document.write("<strong>Ans: Output : “The remainder is :</strong>" + " " + "<strong>"+ total%3 +"</strong>" + "<br><br>" );

document.write("<strong>Q4: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:.</strong>" + "<br>" );
var oneTicktPrice = 600;
var totalCost = 600 * 5;
document.write("<strong>Ans: Output : Total cost to buy ticket to a movie is:</strong>" + " " + "<strong>"+ totalCost +"PKR</strong>" + "<br><br>" );

document.write("<strong>Q5: Write a script to display multiplication table of any. number in your browser. E.g</strong>" + "<br>" );
var tabNumber = +prompt("Enter a number for print a table");

document.write("<strong>Ans: Table of  </strong>" + tabNumber + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 1 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 1 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 2 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 2 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 3 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 3 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 4 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 4 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 5 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 5 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 6 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 6 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 7 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 7 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 8 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 8 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 9 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 9 + "<br>" );
document.write("<strong>" + tabNumber +  "</strong>" + "<strong> * 10 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tabNumber * 10 + "<br><br>" );

document.write("<strong>Q6: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.</strong>" + "<br>" );
document.write("<strong>a:)  Store a Celsius temperature into a variable." + "<br>" );
document.write("<strong>b:)  Convert it to Fahrenheit & output “NNoC is NNoF”." + "<br>" );
document.write("<strong>c:)  Now store a Fahrenheit temperature into a variable." + "<br>" );
document.write("<strong>d:)  Convert it to Celsius & output “NNoF is NNoC”." + "<br>" );
var F = 77;
var celciusTemp = (F - 32) * 5/9;
var fahrenhiteTemp = (celciusTemp * 9/5) + 32;
document.write("Ans: <strong>"+ celciusTemp +"</strong>" + "℃" + " is " + F +"℃<br>" );
document.write("Ans: <strong>"+ fahrenhiteTemp +"</strong>" + "F" + " is " + celciusTemp +"℃<br><br>" );

document.write("<strong>Q7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.</strong>" + "<br>" );
document.write("<strong>a:)  Price of item 1" + "<br>" );
document.write("<strong>b:)  Price of item 2." + "<br>" );
document.write("<strong>c:)  Ordered quantity of item 1" + "<br>" );
document.write("<strong>d:)  Ordered Quantity of item 2" + "<br>" );
document.write("<strong>f:)  Shipping charges" + "<br>" );
var itemOnePrice = 650;
var qtyItemOne = 3;
var itemTwoPrice = 100;
var qtyItemTwo = 7;
var shippingCharges = 100;
var totalItemCost =  itemOnePrice * qtyItemOne + itemTwoPrice * qtyItemTwo + shippingCharges;
document.write("<h1>Shopping Cart</h1>" );
document.write("<strong>Ans: Price of item 1</strong>" + " " + "<strong>"+  " is " + itemOnePrice +"</strong>" + "<br>" );
document.write("<strong>Ans: Quantity of item 1</strong>" + " " + "<strong>"+  " is " + qtyItemOne +"</strong>" + "<br>" );
document.write("<strong>Ans: Price of item 2</strong>" + " " + "<strong>"+  " is " + itemTwoPrice +"</strong>" + "<br>" );
document.write("<strong>Ans: Quantity of item 2</strong>" + " " + "<strong>"+  " is " + qtyItemTwo +"</strong>" + "<br>" );
document.write("<strong>Ans: Total cost of your order</strong>" + " " + "<strong>"+  " is " + totalItemCost +"</strong>" + "<br><br>" );

document.write("<strong>Q8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.</strong>" + "<br>" );
var totalMarks = 980;
var obtMarks = 804;
var totalPercentage = obtMarks / totalMarks * 100;
document.write("<h1>Marks Sheet</h1>" );
document.write("<strong>Ans: Total Marks:</strong>" + " " + "<strong>"+  " is " + totalMarks +"</strong>" + "<br>" );
document.write("<strong>Ans: Marks obtained:</strong>" + " " + "<strong>"+  " is " + obtMarks +"</strong>" + "<br>" );
document.write("<strong>Ans: Percentage:</strong>" + " " + "<strong>"+  " is " + totalPercentage +"</strong>" + "<br>" );

document.write("<strong>Q9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)</strong>" + "<br>" );
document.write("<h1>Currency in PKR</h1>" );
var oneUsdDollar = 104.80;
var totalUsdDollar = 10;
var pkrConversionOfDollar = oneUsdDollar * totalUsdDollar;
var oneSaudiRiyal = 25;
var totalSaudiRiyal = 28;
var pkrConversionOfSr = oneSaudiRiyal * totalSaudiRiyal;
var totalPkrConversion = pkrConversionOfDollar + pkrConversionOfSr;
document.write("<strong>Ans: Marks obtained:</strong>" + " " + "<strong>"+  " is " + totalPkrConversion +"</strong>" + "<br><br>" );

document.write("<strong>Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence:</strong>" + "<br>" );
document.write("<strong>a:)  Add 5" + "<br>" );
document.write("<strong>b:)  Multiply by 10" + "<br>" );
document.write("<strong>c:)  Divide the result by 2 Perform all calculations in a single expression" + "<br><br>" );
var userInput = +prompt("Enter your number");
var add = userInput = 5;
console.log(add, "ADD");
var multiply = userInput * 5;
console.log(multiply, "Multiply");
var divide = multiply / userInput ;
console.log(divide, "Divide"  + "<br><br>" );

document.write("<strong>Q11: The Age Calculator: Forgot how old someone is? Calculate it!</strong>" + "<br>" );document.write("<strong>a:) Store the current year in a variable." + "<br>" );
document.write("<strong>b:) Store their birth year in a variable." + "<br>" );
document.write("<strong>c:) Calculate their 2 possible ages based on the stored values." + "<br>" );
var currentYear = 2023;
var birthYear = 1993;
var age = 2023 - 1993;
document.write("<strong>Ans: Current Year:</strong>" + " " + "<strong>"+  " is " + currentYear +"</strong>" + "<br>" );
document.write("<strong>Ans: Birth Year:</strong>" + " " + "<strong>"+  " is " + birthYear +"</strong>" + "<br>" );
document.write("<strong>Ans: Your Age:</strong>" + " " + "<strong>"+  " is " + age +"</strong>" + "<br><br>" );

document.write("<strong>Q12: The Geometrizer: Calculate properties of a circle.</strong>" + "<br>" );
document.write("<strong>a:) Store a radius into a variable." + "<br>" );
document.write("<strong>b:) Calculate the circumference based on the radius, and output “The circumference is NN”." + "<br>" + "(Hint : Circumference of a circle = 2 π r , π = 3.142)");
document.write("<strong>c:) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)" + "<br>" );
var radius = 20;
var pi = 3.14;
var circumference = 2 * pi * radius;
var area = circumference * radius * (1/2);
document.write("<h1>The Geometrizer</h1>" );
document.write("<strong>Ans: Radius of circle:</strong>" + " " + "<strong>"+  " is " + radius +"</strong>" + "<br>" );
document.write("<strong>Ans: The circumference:</strong>" + " " + "<strong>"+  " is " + circumference +"</strong>" + "<br>" );
document.write("<strong>Ans: Area of Cirlce:</strong>" + " " + "<strong>"+  " is " + area +"</strong>" + "<br><br>" );

document.write("<strong>Q13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.</strong>" + "<br>" );
document.write("<strong>a:) Store your favorite snack into a variable" + "<br>" );
document.write("<strong>b:) Store your current age into a variable." + "<br>" );
document.write("<strong>c:) Store a maximum age into a variable." + "<br>" );
document.write("<strong>d:) Store an estimated amount per day (as a number)." + "<br>" );
document.write("<strong>e:) Calculate how many would you eat total for the rest of your life." + "<br>" );
document.write("<h1>The LifeTime Supply Calculator</h1>" );
var favSnacks = "Choclate chip";
var currentAge = 15;
var maxAge = 65;
var estimatedAmountOfSnackPerDay = 3;
var totalRestOfLife = (maxAge - currentAge) * 365 * estimatedAmountOfSnackPerDay;
document.write("<strong>Ans: Favorite snack:</strong>" + " " + "<strong>"+  " is " + favSnacks +"</strong>" + "<br>" );
document.write("<strong>Ans: current age:</strong>" + " " + "<strong>"+  " is " + currentAge +"</strong>" + "<br>" );
document.write("<strong>Ans: estimated maximum Age:</strong>" + " " + "<strong>"+  " is " + maxAge +"</strong>" + "<br>" );
document.write("<strong>Ans: Amount of Snacks per day:</strong>" + " " + "<strong>"+  " is " + estimatedAmountOfSnackPerDay +"</strong>" + "<br>" );
document.write("<strong>Ans: You will need</strong> " + totalRestOfLife  + " " + favSnacks + " " + "<strong>"+  " to last you until the ripe old age of " + maxAge +"</strong>" + "<br><br>" );

document.write("---------------------------------------Chapter 6 to 09-------------------------------------" + "<br>");

//-------------------------- Assignment No 05 ----------------------------------//
//-------------------------- MATH EXPRESSIONS ----------------------------------//
//-------------------------- Chapter 6 to 09 ----------------------------------//
document.write("<strong>Q1: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</strong>" + "<br>" );
var takeNumber = 10;
document.write("Result:" + "<br>" );
document.write("<strong>Ans: The Value of a is:</strong>" + " "  + takeNumber + "<br>" );
document.write("-------------------------------------------" + "<br>" );
document.write("<strong>Ans: The Value of ++a is:</strong>" + " " + ++takeNumber + "<br>" );
document.write("<strong>Ans: Now the Value a is:</strong>" + " " + takeNumber + "<br><br><br>" );

document.write("<strong>Ans: The Value of a++ is:</strong>" + " " + takeNumber++ + "<br>" );
document.write("<strong>Ans: Now the Value a is:</strong>" + " " + takeNumber + "<br><br><br>" );

document.write("<strong>Ans: The Value of --a is:</strong>" + " " + --takeNumber + "<br>" );
document.write("<strong>Ans: Now the Value a is:</strong>" + " " + takeNumber + "<br><br><br>" );

document.write("<strong>Ans: The Value of a-- is:</strong>" + " " + takeNumber-- + "<br>" );
document.write("<strong>Ans: Now the Value a is:</strong>" + " " + takeNumber + "<br><br><br>" );

document.write("<strong>Q2: What will be the output in variables a, b & result after execution of the following script:</strong>" + "<br>" );
document.write("var a = 2, b = 1;" + "<br>");
document.write("var result = --a - --b + ++b + b--;" + "<br>");
var a = 2;
var b = 1;   
var finalResultOfA = --a;
var finalResultOfB = --b + ++b + b--;
var result = finalResultOfA + finalResultOfB;
document.write("<strong>Ans: a is:</strong>" + " "  + finalResultOfA + "<br>" );
document.write("<strong>Ans: b is:</strong>" + " "  + finalResultOfB + "<br>" );
document.write("<strong>Ans: result is:</strong>" + " "  + result + "<br><br>" );

document.write("<strong>Q3: Write a program that takes input a name from user & greet the user.</strong>" + "<br>" );
var takeUserInput = prompt("Enter your name here");
document.write("<strong>Ans: Have a good day:</strong>" + " "  + takeUserInput + "<br><br>" );

document.write("<strong>Q5: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.</strong>" + "<br>" );
var tableNumber = +prompt("Enter a number for print a table");
if(tableNumber){
	document.write("<strong>Ans: Table of  </strong>" + tableNumber + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 1 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 1 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 2 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 2 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 3 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 3 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 4 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 4 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 5 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 5 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 6 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 6 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 7 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 7 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 8 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 8 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 9 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 9 + "<br>" );
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * 10 </strong>" + " " + "<strong>"+ " = " +"</strong>" + tableNumber * 10 + "<br><br>" );
}else {
	document.write("<strong>Ans: Table of 5 </strong>" + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 1 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 1 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 2 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 2 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 3 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 3 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 4 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 4 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 5 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 5 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 6 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 6 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 7 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 7 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 8 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 8 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 9 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 9 + "<br>" );
	document.write("<strong>" + 5 +  "</strong>" + "<strong> * 10 </strong>" + " " + "<strong>"+ " = " +"</strong>" + 5 * 10 + "<br><br>" );
}

document.write("<strong>Q6: Take.</strong>" + "<br>" );
document.write("<strong>a:) Take three subjects name from user and store them in 3 different variables." + "<br>" );
document.write("<strong>b:) Total marks for each subject is 100, store it in another variable." + "<br>" );
document.write("<strong>c:) Take obtained marks for first subject from user and stored it in different variable." + "<br>" );
document.write("<strong>d:) Take obtained marks for remaining 2 subjects from user and store them in variables." + "<br>" );
document.write("<strong>e:) e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)" + "<br>" );

var subjectOne = prompt("Enter subject one name here");
var subjectTwo = prompt("Enter subject two name here");
var subjectThree = prompt("Enter subject three name here");
var totalMarksEachSub = 100;
var subjectOneObtMarks = +prompt("Enter subject one obtained marks here");
var subjectTwoObtMarks = +prompt("Enter subject two obtained marks here");
var subjectThreeObtMarks = +prompt("Enter subject three obtained marks here");
var percentageSubOne = subjectOneObtMarks / totalMarksEachSub * 100 + "%";
var percentageSubTwo = subjectTwoObtMarks / totalMarksEachSub * 100 + "%";
var percentageSubThree = subjectThreeObtMarks / totalMarksEachSub * 100 + "%";
document.write("<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></thead> <tbody><tr><td>"+subjectOne+"</td><td>"+totalMarksEachSub+"</td><td>"+subjectOneObtMarks+"</td><td>"+percentageSubOne+"</td></tr><tr><td>"+subjectTwo+"</td><td>"+totalMarksEachSub+"</td><td>"+subjectOneObtMarks+"</td><td>"+percentageSubTwo+"</td></tr><tr><td>"+subjectThree+"</td><td>"+totalMarksEachSub+"</td><td>"+subjectThreeObtMarks+"</td><td>"+percentageSubThree+"</td></tr></tbody></table></table>")