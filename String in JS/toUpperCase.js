/**
 *toUpperCase():->The toUpperCase() method is in-built method in JavaScript which is used to change/convert
                  all the lower case characters of a string to upper case characters. 
                ->The JS toUpperCase() methods returns a string without any lower case letters.
                ->Since JavaScript is immutable in nature. The toUpperCase() method converts the string to upper
                  case and does not alter the original string. Instead, it returns a new string with all 
                  character in upper case.
                ->This means that the old, original string is not changed/altered/affected in any way.
                ->The toUpperCase() does not take any parameters.
    
    Syntax: String.toUpperCase();
 */
//1] Storing new string in another variable.
let cityName = "muzaffarpur";
console.log(cityName);
let cityName1 = cityName.toUpperCase();
console.log("After using toUpperCase():");
console.log(cityName1);

//2]Modifying same variable
let email = "mkaykumar123@gmail.com"
console.log(email);
email = email.toUpperCase();
console.log(email);

let stateName = "bihar";
console.log(stateName);
console.log(stateName.toUpperCase());

//3] Without using variable with toUpperCase() method:
let countryName = "india".toUpperCase();
console.log("INDIA after using toUpperCase():",countryName);

//Note:
let jsIsImmutable = "js is immutable";
console.log(jsIsImmutable.toUpperCase()); // it will give you or print Lower case Upper case.
jsIsImmutable.toUpperCase(); // here, toUpperCase() method returns a new string which must be store in a variable. If 
console.log(jsIsImmutable); // it is not stored in any variable then you will get the same value in lower case.
