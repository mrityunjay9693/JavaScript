/**
 * String in JavaScript is defined as the sequence of characters or collection of characters is called string.
 * In JavaScipt, string is written within double quotation or single quotation and it is also be written 
   back-tick character.

 * The two ways for creating strings in JS ,mentioned below:
                      a)String created as primitives, from string literals(putting values in quotes)
                      b)String created as object, using the String() constructor(new String())
 */

//a)String created as primitives, from string literals(putting values in single/double quotes).
//String within double quotation("string").
let firstName = "Mrityunjay";

//String within single quotation('string').
let middleName = 'Kumar'; 

//String is written using backtick character(`string`)
let lastName = "Yadav";
const schoolName = "Holy Mission SR SEC SCH";
let cityName = 'Muzaffarpur';
let stateName = "Bihar";

//b)String is created as object, using String() constructor(new String()).
const countryName = new String("India");

//Accessing above strings.
console.log("First name:",firstName);
console.log("Middle name:",middleName);
console.log("Last name:",lastName);
console.log("School name:",schoolName);
console.log("Address:",cityName+",",stateName+","+"Pin code: 842001.");
console.log(countryName);

