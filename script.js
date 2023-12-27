/* 1. Find the culprit

fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html> */

// solution:

// alert("I'm JavaScript!");
// ----------------------------------------------------------------------------------------------------------------
/* 2.Find the culprit and invoke the alert

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html >
    
scripts.js

alert(“I’m invoked!”); */

// solution:
// <script src=”scripts.js”></script>
// ---------------------------------------------------------------------------------------------------------------
/* 3. Explain the below how it works

explain.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working
 */

// solution:

// alert("I'm JavaScript!");  This line triggers an alert dialog box in the browser with the message "I'm JavaScript!".

// alert('Hello')  This line also triggers an alert dialog box with the message "Hello"

// alert(`World`)  only consider string "" instead of the backtic is used to create a template literal

// alert(3 +1+ 2); triggers an alert dialog box displaying the result of the addition, which is 6.
// ------------------------------------------------------------------------------------------------------------------------------------
/* 4. Fix the below to alert Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek" */

// solution:

// admin = fname + " " + lname;
// -------------------------------------------------------------------------------------------------------------------
/* 5. Fix the below to alert hello Guvi geek
/* 
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' ); */

// solution:

// alert(`hello ${name}`); // Using backticks (`) for template literal
// -----------------------------------------------------------------------------------------------------------------------------
/* 6. Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b); */

// solution:

// Convert strings to numbers using parseFloat or parseInt
// a = parseFloat(a);
// b = parseFloat(b);

// // Check if a and b are valid numbers before performing addition
// if (!isNaN(a) && !isNaN(b)) {
//   alert(a + b);
// } else {
//   alert("Please enter valid numbers!");
// }
// ---------------------------------------------------------------------------------------------------------------------------------------
/* 7. If you run the below scritpt you will get “Code is Blasted”

Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
} */

// solution:

// var a = parseInt("2") > parseInt("12"); // This will parse the strings as integers before performing the comparison

// -------------------------------------------------------------------

/* 8. How to get the success in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
} */

// solution:

// let a = prompt("Enter a number?");
// // Don't modify any code below this
// if (a !== null && a !== undefined) {
//   console.log('Success');
// } else {
//   console.log('OMG it works for any number inc 0');
// }

// --------------------------------------------------------------------------------------------------------------------------

// 9. How to get the correct score in console.

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// solution:

// value = parseInt(value); // Convert the input string to a number

// ----------------------------------------------------------------------------------------------------------------------------

/* 10. Fix the code to welcome the Employee

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message); */

// solution

// let login = 'Employee';
// let message =
//   (login === 'Employee') ? 'Welcome, Employee!' :
//   (login === 'Director') ? 'Greetings, Director!' :
//   (login === '') ? 'No login provided' :
//   'Unexpected login value';
// console.log(message);
// ------------------------------------------------------------------------------------------------------------------------------

/* 11. Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message); */

// solution:
  
// let message;
// if (null || 2 || undefined ) {
//     message = "Welcome boss";
// } else {
//     message = "Go away";
// }
// console.log(message);
// -------------------------------------------------------------------------------------------------------------------------

/* 12.Fix the code to welcome the boss
 
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message); */

// solution:
  
//   let message;
// let lock = 2;


// if (lock === 2) {
//     message = "Welcome boss";
// } else {
//     message = "Go away";
// }
// console.log(message);

// ------------------------------------------------------------------------------------------------------------------------------

/* 13.Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let message;
let lock = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message); */

// solution:

// let message;
// let lock = 2;

// if (lock === 2 || lock === " ") {
//     message = "Welcome boss";
// } else {
//     message = "Go away";
// }
// console.log(message);

// ---------------------------------------------------------------------------------------------------------------------------------

/* 14.Change the code to print

3

2

1

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
} */

// solution:

// let i = 3;
// while (i) {
//   console.log(i--);
// }

// ----------------------------------------------------------------------------------------------------------------------------------

/* 15.Change the code to print 1 to 10 in 4 lines

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num) */

// solution:

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i % 4 === 0) {
//     console.log(''); // Empty line after every 4 numbers
//   }
// }

// -------------------------------------------------------------------------------------------------------------------

/* 16. Change the code to print even numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
} */

// solution:

// for (let num = 2; num <= 20; num += 2) {
//   console.log(num);
// }

// ----------------------------------------------------------------------------------------------

/* 17.Change the code to print all the gifts

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
} */

// solution:

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// -------------------------------------------------------------------------------------------------------------------------------

/* 18.Fix the code to disarm the bomb.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
 */

// solution:

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
// }
// console.log("bomb disarmed");

// -----------------------------------------------------------------------------------------------------------------------------

/* 19.Whats the msg printed and why?

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);
Whats the msg printed and why? Guess you answer before running it.

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg); */

// solution:

// hi message will print

// var lemein = “0”;//string value consider true in if condition even it is zero
// var lemeout = 0;// numeric value consider false in if condition
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);
// ----------------------------------------------------------------------------------------------------------
/* 20. Write a code to print the numbers in the array

Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i];
// }

// console.log(new_string);

// ----------------------------------------------------------------------------------------------------------------------

/* 21. Write a code to print the numbers in the array

Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + , 
}
console.log(new_string); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i];
//   if (i !== numsArr.length - 1) {
//     new_string += ",";
//   }
// }

// console.log(new_string);

// --------------------------------------------------------------------------------------------------------------------------

/* 22. Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

Output: 11 10 9 8 7 6 5 4 3 2 1

var new_string = “”;
 
for (var i = 11; i > 0; i — ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = numsArr.length - 1; i >= 0; i--) {
//   new_string += numsArr[i];
//   if (i !== 0) {
//     new_string += " ";
//   }
// }

// console.log(new_string);

// ------------------------------------------------------------------------------------------------------------------------------

/* 23. Write a code to replace the array value — If the number is even, replace it with ‘even’.

Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 === 0) {
//     numsArr[i] = "even";
//   }
// }

// console.log(numsArr);

// ----------------------------------------------------------------------------------------------------------------------------

/* 24.Write a code to replace the array value — If the index is even, replace it with ‘even’.

Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// for (var i = 0; i < numsArr.length; i++) {
//   if (i % 2 === 0) {
//     numsArr[i] = "even";
//   }
// }

// console.log(numsArr);

// ------------------------------------------------------------------------------------------------------------------------------


/* 25.Write a code to add all the numbers in the array

Output: 66

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0; // Initialize sum to 0

// for (var i = 0; i < numsArr.length; i++) {
//     sum += numsArr[i]; // Accumulate the sum of numbers
// }

// console.log(sum); // Output the total sum

// ------------------------------------------------------------------------------------------------------------------------------
/* 
26.Write a code to add the even numbers only
Output: 30

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;

// for (var i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] % 2 === 0) {
//         sum += numsArr[i]; // Add only even numbers to the sum
//     }
// }

// console.log(sum); // Output the total sum of even numbers

// -------------------------------------------------------------------------------------------------------------------------------

/* 27.Write a code to add the even numbers and subract the odd numbers
Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum); */

// solution:

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0; // Starting with 0 instead of 100

// for (var i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] % 2 === 0) {
//         sum += numsArr[i]; // Add even numbers
//     } else {
//         sum -= numsArr[i]; // Subtract odd numbers
//     }
// }

// console.log(sum); // Output the calculated sum

// --------------------------------------------------------------------------------------------------------------------------

/* 28.Write a code to print inner arrays
Output:

Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++); {
 console.log( numsArr[i])
} */

// solution:

// var numsArr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11]
// ];

// for (var i = 0; i < numsArr.length; i++) {
//     console.log(numsArr[i]);
// }

// output:

// Array [1, 2, 3, 4, 5]
// Array [6, 7, 8, 9, 10, 11]

// -----------------------------------------------------------------------------------------------------------------------

/* 29.Write a code to print elements in the inner arrays
Output: 1234567891011

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all); */

// solution:

// var numsArr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11]
// ];

// var str_all = ""; // Initialize as an empty string

// for (var i = 0; i < numsArr.length; i++) {
//     var inner_array = numsArr[i];
//     for (var j = 0; j < inner_array.length; j++) {
//         str_all += inner_array[j]; // Concatenate each element to the string
//     }
// }

// console.log(str_all);

// -------------------------------------------------------------------------------------------------------------------

/* 30.Write a code to replace the array value — If the index is even, replace it with ‘even’.

Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr); */

// solution:

// var numsArr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11]
// ];

// for (var i = 0; i < numsArr.length; i++) {
//     var inner_array = numsArr[i];
//     for (var j = 0; j < inner_array.length; j++) {
//         if (j % 2 === 0) {
//             numsArr[i][j] = 'even'; // Replace with 'even' if the index is even
//         }
//     }
// }

// console.log(numsArr);

// output:

// [ [ 'even', 2, 'even', 4, 'even' ], [ 6, 'even', 8, 'even', 10, 11 ] ]
// ----------------------------------------------------------------------------------------------------------------------
/* 
31.Write a code to print elements in the inner arrays in reverse
Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all); */

// solution:

// var numsArr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11]
// ];
// var str_all = "";

// for (var i = 0; i < numsArr.length; i++) {
//     var inner_array = numsArr[i];
//     for (var j = inner_array.length - 1; j >= 0; j--) {
//         str_all += inner_array[j] + " "; // Add each element in reverse order
//     }
// }

// console.log(str_all.trim()); // Output the reversed elements

// output: 11 10 9 8 7 6 5 4 3 2 1

// ------------------------------------------------------------------------------------------------------------------------------

/* 32.Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even); */

// solution:

// var numsArr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11]
// ];
// var sum_odd = 0;
// var sum_even = 0;

// for (var i = 0; i < numsArr.length; i++) {
//     var inner_array = numsArr[i];
//     for (var j = 0; j < inner_array.length; j++) {
//         if (inner_array[j] % 2 !== 0) {
//             sum_odd += inner_array[j]; // Sum odd numbers
//         } else {
//             sum_even += inner_array[j]; // Sum even numbers
//         }
//     }
// }

// console.log(sum_odd);
// console.log(sum_even);

// The output will be 36 for the sum of odd numbers and 30 for the sum of even numbers.

// ------------------------------------------------------------------------------------------------------------------------------------

/* 33.Fix the code to get the largest of three.

Code:

aa = (f,s,t) => {
 let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3); */

// solution:

// aa = (f, s, t) => {
//     console.log(f, s, t);
//     if (f > s && f > t) {
//         console.log(f);
//     } else if (s > f && s > t) {
//         console.log(s);
//     } else {
//         console.log(t);
//     }
// };

// aa(1, 2, 3);

// output 3, which is the largest number among the three.

// ---------------------------------------------------------------------------------------------------------------------------------

/* 34.Fix the code to Sum of the digits present in the number

Code:

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
} */

// solution:
// // let n = 123;
// // console.log(add(n));

// // function add(n) {
// //     let sum = 0; // Initialize sum to 0
// //     let numString = n.toString(); // Convert number to string to access individual digits

// //     for (var i = 0; i < numString.length; i++) {
// //         sum += parseInt(numString[i]); // Convert each digit back to number and add to sum
// //     }

// //     return sum;
// // }

// // The output for 123 will be 6, which is the sum of its digits 1 + 2 + 3.

// ----------------------------------------------------------------------------------------------------------------------------------

/* 35.Fix the code to Sum of all numbers using IIFE function

Code:

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(); */

// solution:

// const arr = [9, 8, 5, 6, 4, 3, 2, 1];

// (function () {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
//     return sum;
// })();

// ------------------------------------------------------------------------------------------------------------------------------

/* 36.Fix the code to gen Title caps.

Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(); */

// solution

// var arr = ["guvi", "geek", "zen", "fullstack"];

// var ano = function(arro) {
//     for (var i = 0; i < arro.length; i++) {
//         console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//     }
// }

// ano(arr); // Pass the 'arr' parameter when calling the function

// -----------------------------------------------------------------------------------------------------------------------------

/* 37.Fix the code to return the Prime numbers

Code:

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime); */

// solution:

// const newArray = [1, 3, 2, 5, 10];

// const myPrime = newArray.filter(num => {
//     if (num === 1) {
//         return false; // 1 is not a prime number
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false; // If the number has a divisor other than 1 and itself, it's not prime
//         }
//     }
//     return true; // If no divisors other than 1 and itself, it's a prime number
// });

// console.log(myPrime);

// The output will be [3, 2, 5], which contains only the prime numbers from the original array.

// ---------------------------------------------------------------------------------------------------------------------------------
/* 
38.Fix the code to sum the number in that array

Code:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum = num.reduce(sum)
console.log(sum); */

// solution:

// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = (a, b) => a + b;
// const totalSum = num.reduce(sum);
// console.log(totalSum);

// -----------------------------------------------------------------------------------------------------------------------------------

/* 39.Fix the code to rotate an array by k times and return rotated array using IIFE function

Code:

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})(); */

//  solution:

//  var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = k % arr.length; // Adjust k to be within the range of array length

// (function () {
//     var out = arr.slice(k).concat(arr.slice(0, k));
//     console.log(out);
// })();

// ----------------------------------------------------------------------------------------------------------------------------

/* 40.Fix the code to gen Title caps.

Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})(); */

// solution:

// var arr = ["guvi", "geek", "zen", "fullstack"];

// (function() {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//     }
// })();

// -------------------------------------------------------------------------------------------------------

/* 41.print all odd numbers in an array using IIFE function

Code:

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})();
 */

// solution:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//         }
//     }
// })();

// -------------------------------------------------------------------------------------------------------------

/* 42.Fix the code to reverse.

Code:

(function(str){
 str1 = str.split(“ “).reverse().join(“”);
 console.log(str1); 
})(“abcd”) */

// solution:

// (function(str){
//     var str1 = str.split("").reverse().join("");
//     console.log(str1);
// })("abcd");
// ----------------------------------------------------------------------------------------------------------------------

/* 43.Fix the code to remove duplicates.

Code:

var res = function(arr){
 for(var i=0; i < arr.length; i++){
 newArr = [];
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”]) */

// solution:

// var res = function(arr){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         if(newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// };

// res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

// ---------------------------------------------------------------------------------------------------------------------------

/* 44.Fix the code to give the below output:

Expected Output:

[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]

Code:

var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
} */

// solution:

// var array = [
//     [["firstname", "vasanth"], ["lastname", "Raje"], ["age", 24], ["role", "JSWizard"]],
//     [["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]]
// ];
// var final = [];

// while (array.length !== 0) {
//     var outer_remove = array.shift();
//     var new_object = {}; // Initialize a new object for each set of inner arrays

//     while (outer_remove.length !== 0) {
//         var inner_remove = outer_remove.shift();
//         var key = inner_remove[0];
//         var value = inner_remove[1];
//         new_object[key] = value;
//     }
//     final.push(new_object);
// }

// console.log(final);
// ---------------------------------------------------------------------------------------------------------------------------

/* 45.Fix the code to give the below output:

Sum of odd numbers in an array

Code:


var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s); */

// solution:

// var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
// var s = as.reduce(function(a, c) {
//     if (c % 2 !== 0) {
//         return a + c;
//     }
//     return a;
// }, 0); // Initialize 'a' with 0 for correct addition

// console.log(s);

// -------------------------------------------------------------------------------------------------------------------------------

/* 46.Fix the code to give the below output:

Swap the odd and even digits

Code:

aa = data=>{
 var a=data;
for(i=0;i<a.length-1;i++){
 var l=’’;
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
 i=i+1
}
if((a.length%2)!=0){
 l+=a[a.length-1]
}
console.log(l);
}
aa(“1234”);
 */

// solution:

// aa = data => {
//     var a = data;
//     var l = '';
//     for (i = 0; i < a.length - 1; i += 2) {
//         var s = a[i + 1];
//         var b = a[i];
//         l += s;
//         l += b;
//     }
//     if ((a.length % 2) !== 0) {
//         l += a[a.length - 1];
//     }
//     console.log(l);
// }
// aa("1234");

// -----------------------------------------------------------------------------------------------------------------------------------





































