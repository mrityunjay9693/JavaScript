/*
 1]Using parseInt(): A given string input value can be converted to integer value(Number) using parseInt() function.
                     It tales two parameter i.e., a)stringValue and b) radix : it represents base in which integer 
                     to be converted. Parameter radix is optional. If it is not pass as second parameter then the 
                     function will take base 10 as default. 
 */
// A] : Only passing 1st parameter Without no second parameter(without radix parameter)
//Ex1: taking a string value input and to be parsed to parseInt().Either you use same variable(age)
//for converting or, you can use new variable.
let age = "18";

age = parseInt(age); // age is parsed to parseInt() with single parameter.

console.log(age); // output: 18, which is an integer. Which get after parsing "18" value to the function.
console.log(typeof age);

//Ex2: In the below example, we are parsing the string value input i.e., avgMarks = 94.36,(a decimal value)
//and returns 94, which is an integer. As we discussed earlier, it returns you an integer, thus the value "94.36"
//which is a decimal value will get converted into an integer.
let avgMarks = 94.36;
avgMarks = parseInt(avgMarks); //94.36 -> 94 ( .36 is ignored)
console.log(avgMarks); //94.36
console.log(typeof avgMarks);

//While passing multiple value in a string, space is allowed between values inside the string input value.
//and returns you the left most value from string into integer. As the string is parsed,
//it will converts given string until it faces a string literal and stop parsing.
let values = "338 25 84";
values = parseInt(values); // "30 25 85" -> 30, Since after 30 there is a space between 30 and 25.
//Hence it stops after parsing 30 to integer.
console.log(values);

//Ex3:
let valString = "91is India's country code.";
valString = parseInt(valString); // "91is India's country code." -> 91
console.log(valString);

//Ex4: returns Nan output
let input = "Is India's country code 91?";
console.log(parseInt(input));
console.log(typeof parseInt(input));
