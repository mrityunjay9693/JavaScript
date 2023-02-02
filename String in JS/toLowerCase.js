/**
 *toLowerCase():->The toLowerCase() method is in-built method in JavaScript which is used to change the 
                  change/convert all the all the upper case characters of a string to lower case. 
                ->The JS toLowerCase() methods returns a string without any uppercase letters.
                ->Since JavaScript is immutable in nature. The toLowerCase() method converts the string to lower
                  case and does not alter the original string. Instead, it returns a new string with all 
                  character in lower case.
                ->This means that the old, original string is ot changed/alter/affected in any way.
                ->The toLowerCase() does not take any parameters.
    
    Syntax: String.toLowerCase();
 */
//1] Storing new string in another variable
let cityName = "Muzaffarpur";
console.log(cityName);
let cityName1 = cityName.toLocaleLowerCase();
console.log("After using toLowerCase():");
console.log(cityName1);

//2]Modifying same variable
let email = "MKAYKUMAR123@GMAIL.COM"
console.log(email);
email = email.toLocaleLowerCase();
console.log(email);

let stateName = "BIHAR";
console.log(stateName);
console.log(stateName.toLocaleLowerCase());

//3] Without using variable name with tiLowerCase() method:
let countryName = "INDIA".toLocaleLowerCase();
console.log("INDIA after using toLowerCase(): ",countryName);