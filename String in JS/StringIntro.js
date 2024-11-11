/**
 * String in JavaScript is defined as the sequence of characters or collection of characters is called string.
 * In JavaScipt, string is written within double quotation or single quotation and it is also be written 
   back-tick character.

 * The two ways for creating strings in JS ,mentioned below:
                      a)String created as primitives, from string literals(putting values in quotes): 
                      b)String created as object, using the String() constructor(new String())
 */

//a)String created as primitives, from string literals(putting values in single/double quotes).
//1.String within double quotation("string").
let firstName = "Mrityunjay";

//2.String within single quotation('string').
let middleName = 'Kumar'; 

//3.String is written using backtick character(`string`)
let lastName = "Yadav";
const schoolName = "Holy Mission SR SEC SCH";
let cityName = 'Muzaffarpur';
let stateName = "Bihar";

//b)String is created as object, using String() constructor(new String()).
const countryName = new String("India");
const countryCode = new String("91");
var booleanString = new String(true);
var nullString = new String(null);

//Accessing above strings.
console.log("First name:",firstName);   //Output: First name: Mrityunjay
console.log("Middle name:",middleName); //Output: Middle name: Kumar
console.log("Last name:",lastName);     //Output: Last name: Yadav
console.log("School name:",schoolName); //Output: School name: Holy Mission SR SEC SCH
console.log("Address:",cityName+",",stateName+","+"Pin code: 842001."); //Output: Address: Muzaffarpur, Bihar,Pin code: 842001.
console.log(countryName);   //Output: [String: 'India']
console.log(countryCode);   //Output: [String: '91']
console.log(booleanString); //Output: [String: 'true']
console.log(nullString);    //Output: [String: 'null']
