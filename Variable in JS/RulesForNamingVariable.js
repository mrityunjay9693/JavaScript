/**
 * Rule 1: First Character: The first character of a variable name cannot be a digit. It must begin with a letter, 
           dollar sign($), or underscore(_), but not a number.
*/
var validName = "Mrityunjay Kumar"
console.log("My Name: " + validName)

var $salary = 35000;
console.log("My Salary: " + $salary);

var _myRole = "Full Stack Developer";
console.log("My Role: " + _myRole);

//var 1value = 10;    // Invalid variable name : Cannot startv with digit
//console.log("first value: " 1value);    //SyntaxError: Invalid or unexpected token

/**
 * Rule 2: Once the first character of a variable name is established(which must be a letter, $, _), as per the rule, 
   the subsequent characters in the varibale name can include:
   a)Letters : a - z, A - Z
   b)Digits: 0 - 9
   c)Underscopre character(_).
   d)Dollar sign($).   
 *  name cannot be a digit. It must begin with a letter, 
           dollar sign($), or underscore(_), but not a number.
*/

//using letters and numbers 
var name1 = "Sushma Swaraj";  // Valid : Digits are allowed after first character.
var school_name = "Holy Mission SR SEC SCH";  //Valid : Special character underscore( _ ) is allowed after first character.
var currency$ = "Dollar($)";   //Valid : Special character $ is allowed after first character.
console.log("Name: "+name1);
console.log("Schoole Name: "+school_name);
console.log("Money accepted in: "+currency$);