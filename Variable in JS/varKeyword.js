/**
 * "var" is a keyword which is used for declaration of a variable in JavaScript.
 * The var keyword was introduced in JavaScript from very beginning, in its first version which was released in 1995
   by Netscape. 

 * var is the only way to declare variable in JavaScript until let and const are introduced in ECMAScript 6 (ES6) 
   in 2015
 * Variables can store soome information and values in it.
 * We can use that information later in the program.
 * We can also alter the information later in the program.
 */
//Declaration of a variable.
var firstName = "Mrityunjay";

//Use of the varaible firstName
console.log("First Name: "+firstName);

//Altering the existing value/information of the variable firstName
//Now, we don't need to re-declare the variable while giving some value i.e., while altering it.
firstName = "Mrinal";
console.log("After alter, the First Name: "+firstName);

//if, we use 'var' keyword with the same variable i.e., firstName, then another firstName variable will be created, since 
//we have added the 'var' keyword along with the firstName.
var firstName = "Mohit";
console.log("Another firstName variable is created, firstName: "+firstName);
