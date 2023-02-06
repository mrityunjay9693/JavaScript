/**
 * 1]Using the: '+' Operator.
 */
//a)Non-Mutative Concatenation Approach : ('+' operator)
//Ex1:
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2); //HelloWorld
console.log(str1 + " " + str2); ////Hello World

let greet = str1 + str2 + ", " + "Welcome to tilde~";
console.log(greet);

//Ex2:
let firstName = "Mrityujay";
let lastName = "Kumar";
let fullName = firstName + lastName;
console.log("Name:", fullName); // MrityunjayKumar

let myName = firstName + " " + lastName;
console.log("Name:", myName); // Mrityunjay Kumar

//b)Mutative Concatenation Approach : ('+=' operator)
//Ex:1
let cityName = "Muzaffarpur";
let stateName = "Bihar.";
let intro = "I belongs to";
intro += " " + cityName + ", " + stateName;
console.log(intro);

// Ex:2 
let countryCode = "91";
countryCode += " is " + "India's country code."
console.log(countryCode);
