/*
 1]Using parseInt(): A given string input value can be converted to integer value(Number) using parseInt() function.
                     It tales two parameter i.e., a)stringValue and b) radix : it represents base in which integer 
                     to be converted. Parameter radix is optional. If it is not pass as second parameter then the 
                     function will take base 10 as default. 
 */
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

console.log(parseInt("3o 11 43"));
