/**
 * null : null is another data type in JS, which indicates/tells that if a variable is null type then it does
          not hold any value.
 *  If a variable has null type, then the variable can be declared by var, let and const keyword and the 
    variable is assigned to null value. 
 *  The null type in JavaScript refers to an empty object pointer.
 */

let myValue = null;
console.log(myValue);   //null

// we can also alter the value of variable which is null as shwon in the next line
myValue = 2024;
console.log(myValue);

//Now let's talk about a bug that is, if the value of variable is "null", then its type will be "object", 
//as we all know object is completely different data type in JavaScript but actually a bug 
//which is showing here.
let myName = null;
console.log(typeof myName); //object : a bug in JS   

// Variable declared with "var" type can also store "null" value
var month = null;
console.log(month);
console.log(typeof month); //object : a bug here
month = "October"; // variable having null value can also alter and we are able to modify its vaue
console.log(month);
console.log(typeof month);
