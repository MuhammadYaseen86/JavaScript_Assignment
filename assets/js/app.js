// //-------------------------- Assignment No 06 ----------------------------------//
// // //-------------------------- ARRAYS ----------------------------------//
// // //-------------------------- Chapter 21 to 25 ----------------------------------------//

// document.write("<strong>Q1: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.</strong>" + "<br>");
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// document.write("Ans: " + "Welcome to" + " " + fullName + " " + "<br><br>" );

// document.write("<strong>Q2: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser</strong>" + "<br>");
// var fvtMobileModel = prompt("Enter your favorite mobile phone model.");
// document.write("Ans: " + "My favorite mobile phone is:" + " " + fvtMobileModel + " " + " Length of String" + fvtMobileModel.length + "<br><br>" );

// document.write("<strong>Q3: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.</strong>" + "<br>");
// var pakistanString = "Pakistani";
// document.write("Ans: " + "Index of 'n':" + " " + pakistanString.indexOf("n") + " " + "<br><br>" );

// document.write("<strong>Q4: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.</strong>" + "<br>");
// var helloWorld = "Hello World";
// document.write("Ans: " + "Last Index of 'l':" + " " + helloWorld.lastIndexOf("l") + " " + "<br><br>" );

// document.write("<strong>Q5: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.</strong>" + "<br>");
// var IndexOfThird = "Pakistani";
// document.write("Ans: " + "Character at Index 3:" + " " + IndexOfThird.charAt(3) + " " + "<br><br>" );

// document.write("<strong>Q6: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.</strong>" + "<br>");
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// document.write("Ans: " + "Welcome to" + " " + firstName + " " + lastName + "<br><br>" );

// document.write("<strong>Q7: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.</strong>" + "<br>");
// var city = "Hyderabad";
// var newCity = city.replace("Hyderabad", "Islam");
// document.write("Ans: " + "City " + " " + city + " " + "<br>" );
// document.write("Ans: " + "After replacement " + " " + newCity + " " + "<br><br>" );

// document.write("<strong>Q8: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;</strong>" + "<br>");
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Ans: " + "Message " + " " + message.replaceAll("and", "&") + " " + "<br><br>" );

// document.write("<strong>Q9: Write a program that converts a string “472” to a number 472. Display the values & types in your browser.</strong>" + "<br>");
// var stringNumber = "472";
// var stringNumberConvertToNumber = parseInt("472");
// document.write("Ans: " + "Value:" + " " + stringNumber + " " + "<br>" );
// document.write("Ans: " + "Type: " + " " + typeof(stringNumber) + " " + "<br>" );
// document.write("Ans: " + "Value: " + " " + stringNumberConvertToNumber + "  " + "<br>" );
// document.write("Ans: " + "Type: " + " " + typeof(stringNumberConvertToNumber) + " " + "<br><br>" );

// document.write("<strong>Q10: Write a program that takes user input. Convert and show the input in capital letters.</strong>" + "<br>");
// var fvtPeanuts = prompt("Enter your fvt Peanuts");
// document.write("Ans: " + "User Input" + " " + fvtPeanuts + " " + "<br><br>" );
// document.write("Ans: " + "Upper Case" + " " + fvtPeanuts.toUpperCase() + " " + "<br><br>" );

// document.write("<strong>Q11: Write a program that takes user input. Convert and show the input in title case.</strong>" + "<br>");
// var firstLetterIntoUppcase = prompt("Enter your lower case words");
// document.write("Ans: " + "User Input" + " " + firstLetterIntoUppcase + " " + "<br>" );
// document.write("Ans: " + "User Input" + " " + firstLetterIntoUppcase[0].toUpperCase() + firstLetterIntoUppcase.slice(1) + " " + "<br><br>" );

// document.write("<strong>Q12: Write a program that converts the variable num tostring. var num = 35.36 ; Remove the dot to display “3536” display in your browser.</strong>" + "<br>");
// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("Ans: " + "Number" + " " + num + " " + "<br>" );
// document.write("Ans: " + "Result" + " " + str + " " + "<br>" );

// document.write("<strong>Q13 :Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .</strong>" + "<br>");
// var userName = prompt("Enter your username:");
// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//   document.write("Ans: " + " Please enter a valid userName without any special symbols (@, ., , or !). " );
// } else {
//    document.write("Ans: " + " Your userName is: "  + userName + "<br><br>");
// }

// document.write("<strong>Q14 :You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:</strong>" + "<br>");

// var barkeryArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item you want to search:");
// var isFound = false;
// for (var i = 0; i < barkeryArray.length; i++) {
//   if (barkeryArray[i].toLowerCase() === userInput.toLowerCase()) {
//     isFound = true;
//     break;
//   }
// }
// if (isFound) {
//   document.write("Ans: " + userInput + " is available at" + " " + i + "<br><br>");
// } else {
//   document.write("Ans: " + userInput + " is not available in the list." + " " + i +  "<br><br>");
// }

// document.write("<strong>Q15: Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long. If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.</strong>" + "<br>");

// var userPassword = prompt("Enter a userPassword");
// var firstCharCode = userPassword.charCodeAt(0);
// let hasLetters = false;
// let hasNumbers = false;
// if (userPassword.length < 6) {
//     // return false;
//     alert("Length of Password should be 6")
// }else if (!(firstCharCode >= 65 && firstCharCode <= 90) && !(firstCharCode >= 97 && firstCharCode <= 122)) {
// 	alert("Length of Password should be 6 and first character shouldn't be start with a number");
// }else {
// 	for (let i = 0; i < userPassword.length; i++) { 
// 		var charCode = userPassword.charCodeAt(i);
// 		console.log(charCode);
// 		if (charCode >= 65 && charCode <= 90) {
// 	      hasLetters = true;
// 	    }else if (charCode >= 48 && charCode <= 57) {
// 	      hasNumbers = true;
// 	      alert("SUccess")
// 	      break;
// 	    }
// 	}
// }

// document.write("<strong>Q16: Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.</strong>" + "<br>");
// var university = "University of Karachi";
// var breakArray = university.split("");
// for(var i = 0; i < breakArray.length; i++) {
// 	document.write("Ans: " + breakArray[i] + " " + " " +  "<br><br>");
// }

// document.write("<strong>Q17: Write a program to display the last character of a user input.</strong>" + "<br>");
// var userInputShowLastIndexOfCharcter = prompt("Enter your desire word");
// var lastIndexOfCharacter = userInputShowLastIndexOfCharcter.charAt(userInputShowLastIndexOfCharcter. length - 1);
// document.write("Ans: " + " User Input " + userInputShowLastIndexOfCharcter + " " + " " +  "<br>");
// document.write("Ans: " + " Last Charactre of Input: " + lastIndexOfCharacter + " " + " " +  "<br>");

//document.write("<strong>Q18: You have a string “The quick brown fox jumps over thelazy dog”. Write a program to count number of occurrences of word “the” in given string.</strong>" + "<br>");
// var qoutesText = "The quick brown fox jumps over thelazy dog";
// // var lastIndexOfCharacter = userInputShowLastIndexOfCharcter.charAt(userInputShowLastIndexOfCharcter. length - 1);
// // console.log(lastIndexOfCharacter);

// var str = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var words = str.split(" ");

// // Initialize a counter for the number of occurrences
// let count = 0;

// // Loop through each word in the array
// for (let i = 0; i < words.length; i++) {
//   // If the current word matches the target word, increment the counter
//   if (words[i].toLowerCase() === word.toLowerCase()) {
//     count++;
//   }
// }
// document.write("Ans: Text :" + str + " " + " There are " + count  + " " + "occurance(s) of word" + " "  + word + "<br>");