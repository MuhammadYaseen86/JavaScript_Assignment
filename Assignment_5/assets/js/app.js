// // //-------------------------- Assignment No 05 ----------------------------------//
// // //-------------------------- ARRAYS ----------------------------------//
// // //-------------------------- Chapter 13 to 15 ----------------------------------------//

document.write("<strong>Q1: Declare an empty array using JS literal notation to store student names in future.</strong>" + "<br>");
var studentNames = ['abbas','ahmed','raza','owais','osama'];
document.write("Ans:" + studentNames  + " "  + "<strong> Student list </strong>" + "<br><br>" );

document.write("<strong>Q2: Declare an empty array using JS object notation to store student names in future.</strong>" + "<br>");
var studentObj = {
	id : 0,
	firstName : "yaseen",
	lastName : "ahmed",
}
document.write( "Ans: Hi, my name is" + " " + studentObj.firstName  + " "  + studentObj.lastName + "<br><br>" );

document.write("<strong>Q3: Declare and initialize a strings array.</strong>" + "<br>");
var stringArray = ['a','b','c','d','e'];
document.write( "Ans: String of array" + " " + stringArray  + " " + "<br><br>" );

document.write("<strong>Q4: Declare and initialize a numbers array.</strong>" + "<br>");
var numbersArray = [1,2,3,4,5];
document.write( "Ans: Numbers of array" + " " + numbersArray  + " " + "<br><br>" );

document.write("<strong>Q5: Declare and initialize a boolean array.</strong>" + "<br>");
var boolArray  = [true , false];
document.write( "Ans: Boolean of array" + " " + boolArray  + " " + "<br><br>" );

document.write("<strong>Q6: Declare and initialize a mixed array.</strong>" + "<br>");
var mixArray  = [1, "ahmed", 0.2 , true , false];
document.write( "Ans: Mixed of array" + " " + mixArray  + " " + "<br><br>" );

document.write("<strong>Q7: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:</strong>" + "<br>");
var qualifications  = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write( "Ans: Mixed of array" + " " + qualifications  + " " + "<br><br>" );

document.write("<strong>Q8: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:</strong>" + "<br>");
var studentName = ["Abass","Ahmed","Raza"];
var studentScore = [485,359,378];
var totalMarks = 500;
var michaelPercentage = studentScore[0] / totalMarks * 100 + "%";
var johnPercentage = studentScore[1] / totalMarks * 100 + "%";
var tonyPercentage = studentScore[2] / totalMarks * 100 + "%";
document.write("<div class='marks-sheet-table'>");
document.write( "Ans: Score of Michael is" + " " + studentScore[0]  + " " + michaelPercentage + "<br>" );
document.write( "Ans: Score of John is" + " " + studentScore[1]  + " " + johnPercentage + "<br>" );
document.write( "Ans: Score of Tony is" + " " + studentScore[2]  + " " + tonyPercentage + "<br><br>" );
document.write("</div>");

document.write("<strong>Q9: Initialize an array with color names. Display the array elements in your browser.</strong>" + "<br>");
document.write("<strong>a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.</strong>" + "<br>");
document.write("<strong>b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display theupdated array in your browser.</strong>" + "<br>");
document.write("<strong>c. Add two more color to the beginning of the array. Display the updated array in your browser.</strong>" + "<br>");
document.write("<strong>d. Delete the first color in the array. Display the updated array in your browser.</strong>" + "<br>");
document.write("<strong>e. Delete the last color in the array. Display the updated array in your browser.</strong>" + "<br>");
document.write("<strong>f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.</strong>" + "<br>");
document.write("<strong>g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then</strong>" + "<br><br>");

var colorNames = ["red","green","blue","white","gray"];
document.write( "Ans: Before updates color list:" + " " + " <strong> " + colorNames + "</strong>"  + " " + "<br><br>" );

var userAddColor = prompt("what color he/she wants to add to the beginning");
var addNewColorStartOfIndex = colorNames.unshift(userAddColor)
document.write( "Ans: a) After updates color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>" );

var addNewColorEndOfIndex = colorNames.push(userAddColor)
document.write( "Ans: b) Added to the end of color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>");

var addNewTwoOrMoreColorStartOfIndex = colorNames.splice(0,0,"brown","light gray");
document.write( "Ans: c) Add two more color to the beginning of color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>" );

var deleteOneColorStartOfIndex = colorNames.shift();
document.write( "Ans: d) Delete the first color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>" );
console.log(deleteOneColorStartOfIndex, "deleteOneColorStartOfIndex")

var deleteOneColorLastOfIndex = colorNames.pop();
document.write( "Ans: e) Delete the last color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>" );
console.log(deleteOneColorLastOfIndex, "deleteOneColorLastOfIndex")

var whichIndexWantsToAddColor = +prompt("Enter at which index would you like to add a color?");
var whichIndexWantsToColorName =  prompt("Enter which color would you like to add?");
var userDesireArray = colorNames.splice(whichIndexWantsToAddColor, 1, whichIndexWantsToColorName);
console.log(userDesireArray, "userDesireArray")
document.write( "Ans: f) The updated list of color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>");

var whichIndexWantsToDeleteColor = +prompt("Enter at which index would you like to delete a color?");
var howMuchWantToBeDelete =  +prompt("Enter how many colors would you like to delete?");
var userDeleteDesireArray = colorNames.splice(howMuchWantToBeDelete, whichIndexWantsToDeleteColor);
console.log(userDeleteDesireArray, "userDeleteDesireArray")
document.write( "Ans: g) The delete list of color list:" + " " + " <strong> " + colorNames + "</strong>"  + "<br><br>" );

document.write("<strong>Q10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</strong>" + "<br>");
var studentsArray = [320,230,480,120];
var ascendingSortArray = studentsArray.sort() 
document.write( "Ans: g) Ordered Scores of students:" + " " + " <strong> " + ascendingSortArray + "</strong>"  + "<br><br>" );

document.write("<strong>Q11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.</strong>" + "<br>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshwaar"];
var selectCitesArray = cities.slice(2, 4);
document.write( "Ans: Selected Cites list:" + " " + " <strong> " + selectCitesArray + "</strong>"  + "<br><br>" );

document.write("<strong>Q12: Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];</strong>" + "<br>");
var arr = ["This", "is", "my", "cat"];
var removeComma = arr.join(" ");
document.write( "Ans: String:" + " " + " <strong> " + removeComma + "</strong>"  + "<br><br>" );

document.write("<strong>Q13: Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)</strong>" + "<br>");

var devices = [];
var keyboardDevices = devices.push("Keyboard");
var mouseDevices = devices.push("Mouse");
var printerDevices = devices.push("Printer");
var monitorDevices = devices.push("Monitor");
document.write( "Ans: Devices:" + " " + " <strong> " + devices + "</strong>"  + "<br><br>" );

var keyboardDevicesOut = devices.shift("Keyboard");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + keyboardDevicesOut + "</strong>"  + "<br><br>" );

var mouseDevicesOut = devices.shift("Mouse");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + mouseDevicesOut + "</strong>"  + "<br><br>" );

var printerDevicesOut = devices.shift("Printer");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + printerDevicesOut + "</strong>"  + "<br><br>" );

var monitorDevicesOut = devices.shift("Monitor");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + monitorDevicesOut + "</strong>"  + "<br><br>" );

document.write("<strong>Q14: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)</strong>" + "<br>");

var devicesLifo = [];
var keyboardDevicesLifo = devicesLifo.push("Keyboard");
var mouseDevices = devicesLifo.push("Mouse");
var printerDevices = devicesLifo.push("Printer");
var monitorDevices = devicesLifo.push("Monitor");
document.write( "Ans: Devices:" + " " + " <strong> " + devicesLifo + "</strong>"  + "<br><br>" );

var lifokeyboardDevicesOut = devicesLifo.pop("Keyboard");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + lifokeyboardDevicesOut + "</strong>"  + "<br><br>" );

var lifomouseDevicesOut = devicesLifo.pop("Mouse");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + lifomouseDevicesOut + "</strong>"  + "<br><br>" );

var lifoprinterDevicesOut = devicesLifo.pop("Printer");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + lifoprinterDevicesOut + "</strong>"  + "<br><br>" );

var lifomonitorDevicesOut = devicesLifo.pop("Monitor");
document.write( "Ans: Out:" + "<br>"  );
document.write( "<strong> " + lifomonitorDevicesOut + "</strong>"  + "<br><br>" );

document.write("<strong>Q15: Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:" + "<br>");

var mobilePhonesCompanines = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write( "<select>" );
for(var i=0; i < mobilePhonesCompanines.length; i++) {
	document.write( "<option> " + mobilePhonesCompanines[i] + "</option>" );
}
document.write( "</select>" );
document.write( "<br><br>" );

// // //-------------------------- Assignment No 05 ----------------------------------//
// // //-------------------------- ARRAYS ----------------------------------//
// // //-------------------------- Chapter 17 to 20 ----------------------------------------//

document.write("<strong>Q1: Declare and initialize an empty multidimensional array. (Array of arrays)" + "<br><br>");
var multidimensionalArray = [[]];

document.write("<strong>Q2: Declare and initialize a multidimensional array representing the following matrix:" + "<br><br>");
var multidimensionalMatrixOfArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1 , 0, 1]];
document.write( "Ans: [" + "<br>"  );
document.write( "<strong> " + multidimensionalMatrixOfArray[0] + "</strong>"  + "<br><br>" );
document.write( "<strong> " + multidimensionalMatrixOfArray[1] + "</strong>"  + "<br><br>" );
document.write( "<strong> " + multidimensionalMatrixOfArray[2] + "</strong>"  + "<br><br>" );
document.write( "]" + "<br>"  );

document.write("<strong>Q3: Write a program to print numeric counting from 1 to 10." + "<br><br>");
for(var i=0; i <= 10; i++) {
	document.write( "<option> " + [i] + "</option>" );
}
document.write( "<br><br>" );

document.write("<strong>Q4: Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.</strong>" + "<br>" );
var tableNumber = +prompt("Enter a number for print a table");
var tableNumberLength = +prompt("Enter a number for print a table");
for(var i=1; i <= tableNumberLength; i++) {
	document.write("<strong>" + tableNumber +  "</strong>" + "<strong> * x </strong>" + " " + i + "<strong>"+ " = " +"</strong>" + tableNumber * i + "<br><br>" );
}

document.write("<strong>Q5: Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]</strong>" + "<br>" );
var fruitsArray = ["apple","banana","mango","orange","strawberry"];
for(var i=0; i < fruitsArray.length; i++) { 
	document.write("Ans: <strong>" + fruitsArray[i] +  "</strong>" + "<br><br>" );
	document.write( "Ans: Element at index" + " " + i + " <strong> " + fruitsArray[i] + "</strong>"  + "<br><br>" );
}

document.write("<strong>Q6: Generate the following series in your browser. See example output.</strong>" + "<br>" );
document.write("<strong>a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15</strong>" + "<br>" );
document.write("<strong>b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1</strong>" + "<br>" );
document.write("<strong>c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</strong>" + "<br>" );
document.write("<strong>d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19</strong>" + "<br>" );
document.write("<strong>e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k</strong>" + "<br>" );

document.write("<div class='marks-sheet-table'>");
document.write("<strong>Ans) a. Counting: </strong>"  );
for(var i=1; i <= 15; i++) {
	document.write("<strong>" + " " + i + " " + "</strong>" );
}
document.write( "<br><br>" );

document.write("<strong>Ans) b. Reverse Counting: </strong>" );
for(var rc=10; rc > 0; rc--) {
	document.write("<strong>" + " " + rc + " " + "</strong>" );
}
document.write( "<br><br>" );
document.write("<strong>Ans) c. Even: </strong>" );
for(var even=0; even <= 20; even++) {
	if (even % 2 === 0) {
        document.write("<strong>" + " " + even + " " + "</strong>" );
    }	
}
document.write( "<br><br>" );
document.write("<strong>Ans) d. Odd: </strong>" );
for(var odd=0; odd <= 20; odd++) {
	if (odd % 2 === 1) {
        document.write("<strong>" + " " + odd + " " + "</strong>" );
    }	
}
document.write( "<br><br>" );
document.write("<strong>Ans) e. Series: </strong>" );
for(var series=2; series <= 20; series++) {
	if (series % 2 === 0) {
        document.write("<strong>" + " " + series + "k" + "</strong>" );
    }	
}
document.write("</div>")

document.write("<strong>Q7: You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:</strong>" + "<br>" );

let userValue = prompt('Welcome to ABC Bakery, What do you want to be order Sir/Mam');        
let cookiesArray = ["cake", "apple pie", "cookie", "chips", "patties"];       
for(let i = 0; i < cookiesArray.length; i++) {         
	if(cookiesArray[i] === userValue) {            
		document.write( "Ans: " + userValue + " is avaiable at index of" + " <strong> " + i + "</strong>"  + "<br><br>");
	 	//break;                  
	}else {
		document.write( "Ans: " + userValue + " is not avaiable at our bakery"  + "<br><br>" )
	}       
}
 
document.write("<strong>Q8: Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].</strong>" + "<br>" );

var largestNumberArray = [24, 53, 78, 91, 12];
var largestNumber = Math.max( ...largestNumberArray )

document.write( "Ans: Array of item " + largestNumberArray  + "<br>" );
document.write( "Ans: " + largestNumber + " is largest number"   + "<br><br>" );

document.write("<strong>Q9: Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].</strong>" + "<br>" );

var smallestNumberArray = [24, 53, 78, 91, 12];
var smallestNumber = Math.min( ...smallestNumberArray )

document.write( "Ans: Array of item " + smallestNumberArray  + "<br>" );
document.write( "Ans: " + smallestNumber + " is smallest number"   + "<br><br>" );

document.write("<strong>10. Write a program to print multiples of 5 ranging 1 to 100.</strong>" + "<br>" );

for(var multiples=1; multiples <= 20; multiples++) {
	document.write("Ans:</strong>" + multiples * 5 + "</strong> <br><br>" );
}




