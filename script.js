// var userInput = prompt("Enter your name")
// alert(userInput)
// var kashan = "Kashan"
// var Kashan = 12

// var num1 = 4
// var num2 = 4

// var num3 = num1 + 100 * 1 + 10

// alert(num3)
// var user =+ prompt("Enter your name")
// alert(typeof user)

// var num = 1

// alert("First Alert " + ++num)
// alert("Second Alert " + num)

// var num = 4

// alert(num--)
// alert(num)

// alert("Hello Kashan")

// var num = prompt("Enter your name")

// alert("Hello " + num + "!")
// var x =+ prompt("enter your number")

// if (4 != 2) {
//     alert("You selected no 2")
// }

// var num = prompt("Enter any number")
// alert(num + "X" + num + "=" + num * 1);
// alert(num + "X" + num + "=" + num * 2);
// alert(num + "X" + num + "=" + num * 3);
// alert(num + "X" + num + "=" + num * 4);
// alert(num + "X" + num + "=" + num * 5);
// alert(num + "X" + num + "=" + num * 6);
// alert(num + "X" + num + "=" + num * 7);

// var age = 23
// var name = "Laptop"

// if (age <= 18) {
//     console.log("AGE is 18");
// }
// else if (name === "Kashan") {
//     alert("Your are Kashan")
// }
// else {
//     console.log("Condition False")
// }

// var name2 = "Kashan"
// var age = 8


// if (name2 === "Kashan" && age >= 10) {
//     alert("Your Kashan")
// }


// if(email == "kashan@gmail.com" && password == "admin")


// if(email == "kashan" && password === "admin" && country == "pakistan")


// var question1 =+ prompt("What is 2 + 2 ?")
// var answer1 = 4
// if (question1 === answer1) {
//     number++
// }



// var name = prompt("Enter your name")
// var age = + prompt("Enter your age")

// if (name === 'Aniq') {
//     alert("Your Name is Aniq")
//     if (age >= 13) {
//         alert("Age" + age + "Kashan")
//     }
// }

// Array

// Collection of Data

// var students = ["musa", "aniq", "fatima", "wasay", "nimra", "hania", "fatima1", "fatima2"]

// var student = prompt("Enter any student name")

// if (students[0] === student) {
//     alert(students[0])
// }
// else if (students[1] === student) {
//     alert(students[1])
// }
// else if (students[2] === student) {
//     alert(students[2])
// }
// else {
//     alert("You are not a student")
// }


// var cookies = ["Chocolate", "vanila", "fly", 'bug', "ox", "dog", "cat"]

// cookies.shift()
// cookies.pop()
// cookies.unshift("kashan", "wasay")
// cookies.push("Kashan")
// cookies.splice(1 , 1, "Kashan")

// var cookie1 = cookies.slice(1, 5)

// console.log(cookie1);

// var array1 = ["almira", "basket", "fatima", "kashan", "chocolate", "wasay"]
// var array2 = [1, 2234, 23, 234, 23, 423,]
// var array3 = ["asdaksjdh", "kasahan", "wasay"]
// console.log(array1.at(2));


// array1.reverse()
// console.log(array1);

// array1.splice(0, 1, "kashan")
// console.log(array1);

// array1.splice(1, 1)
// console.log(array1);
// var array2 = [8, 1, 4, 3, 20, 10, 56]
// array1[0] = "Kashan"
// console.log(array1);
// console.log(array1.sort());
// How to get lenght of array
// console.log(array1.join("*"));
// console.log(array.length)


// Join Method And Split Method

// console.log(array.join("-"))

// console.log(array1.concat(array2, array3));


// var name = "Kashan Adnan"

// String Methods

// var length = text.length;
// Character At
// console.log(name.charAt(3));

// lowerCase

// KASHAN upper case string
// kashan lower case string

var name = "adnan"
var name2 = "KASHAN"
console.log(name.toUpperCase());
console.log(name2.toLowerCase());

// console.log(text.toLowerCase());
// console.log(name.toUpperCase());

var nam3 = "       Kashan    " // trim() start ya end  spaces remove spaces
console.log(nam3.trim());
console.log(nam3.trimEnd());
console.log(nam3.trimStart());
// console.log(text.trim());
// console.log(text.trimEnd());
// console.log(name + text);
// var text = "5";
// padStart
var text = "5"; // lenght 4 add 0
console.log(text.padStart(15, "0"));
console.log(text.padEnd(15, "0"));

// text = text.padStart(4, "y");
// console.log(text);


// // padEnd
// var text2 = "5"; // lenght 4 add 0
// text2 = text2.padEnd(4, "y");
// console.log(text2);

// Repeat Method

var text = "kashan"

console.log(text.repeat(4))

var text = "Wasay is a good boy"
// Replaces Method 
text.replace("Wasay", "Kashan")
console.log(text.replace("Wasay", "Kashan"));
// Finding Value // Replacing Value



// var text = "kashanis-a-gootry {

var text = "Apple, Banana, Kiwi"

// Substr Method Depreciated substring

// console.log(text.slice(-7));

// console.log(text.substring(7, 13));


// for loop

// syntax (tareeka)
// 1. Varible Declare 2. Condition Check  3. Increment Varible

for (var i = 0; i < 10; i++) {
    console.log(i);
}


// Flags Varibles

// var cleanest_city = [
//     "Karachi",
//     "Islamabad",
//     "Lahore",
//     "Chennie",
//     "Peshawar",
//     "Queta"
// ]

// var user = prompt("Enter any cleanest city name: ")

// For Loop  Syntax (Likhne ka tareeka)

// declaration, condition, incrementation


// if for loop true increment block code
// Flag Varible
// var matchFound = false;

// for (var i = 0; i < cleanest_city.length; i++) {
//     if (user == cleanest_city[i]) {
//         matchFound = true
//         alert("You selected cleanest city")
//     }
// }

// if (matchFound == false) {
//     alert("It is not the cleanest city")
// }


// if (user == cleanest_city[0]) {
//     alert("You selected cleanest city")
// }
// else if (user == cleanest_city[1]) {
//     alert("You selected cleanest city")
// }
// else if (user == cleanest_city[2]) {
//     alert("You selected cleanest city")
// }
// else if (user == cleanest_city[3]) {
//     alert("You selected cleanest city")
// }
// else {
//     alert("It is not the cleanest city")
// }



// For Loop Nested

// var num = + prompt("Enter any number to generate the table!")

// for (var i = 1; i <= 10; i++) {
//     console.log(num * i);
// }

// Table Generator


// Changing Case

// var name1 = "Kashan"

// console.log(name1.toLowerCase()) // to lower case kashan
// console.log(name1.toUpperCase()) // TO UPPER CASE KASHAN


// Extracting Length
// var name1 = "Kashan is good boy"

// console.log(name1.length)

// Extracting Word String
//  012345678901234567
// var name1 = "Kashan is good boy"

// // slice method
// console.log(name1.slice(14, 18))

// var text = "the second world war World War II world war"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
// Index Of // Last Index Of

// var text = "To be or not to be.";
// text = "Kashan"

// console.log(text)
// var segIndex = text.indexOf("be");
// var segIndex = text.lastIndexOf("be");

// console.log(segIndex)
// var text = "the second world war World War II world war"
// var text2 = text.replace("World War II", "the second world war")

// console.log(text2)

// JavaScript Math methods
// ceil() floor() round() random()

// var num1 = 3.99
// var num2 = 4.28
// var num3 = 6.56
