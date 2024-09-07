/**
 * Variables:->Variable in JavaScript is the most basic building block programming entity 
               a)which is used to store information.
               b)these information can be used in the program later 
               c)and if possible, can be altred/changed. 
             ->Variable name in JavaScript in case-sensitive.
    
 * Creation/Declaration of Variable in JS :
            ->Systax : 
                      "keyword variable_name = values;"  
                       
            ->Here, in JavaScript var, let and const are such keywords which is used to create a variable.
                      eg: 1) var num = 12;
                          2) let num1 = 123;
                          3) const name1 = "JavaScript"
            
            * values/data/information can be : an integer, a string etc.
            * var/let/const are the keyword in JavaScript which is used to create any programming entity as variable. 
*/
//Ex 1:
//Declaration/Creation of variable
var firstName = "Mrityunjay";
let lastName = "Kumar";
const cityName = "Muzaffarpur";

console.log("Information: ")

//Using the variabale
console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("City Name: "+cityName);

//Change variable value/data.
firstName = "Sushma";  //value/data of firstName(declared in line 20) vartiable is changed here.
lastName = "Swaraj"          //value/data of lastName vartiable(declared in line 21) is changed here
let cityName1 = "New Delhi";
/*cityName = "New Delhi";   //error : Re-Assignment to constant variable not allowed.*/
console.log("Values of first name and last name after change/modification: ");
console.log("First Name:"+firstName)
console.log("Last Name: "+lastName);
console.log(cityName);

//Ex 2:


//JavaScript is a "case-sensitive" programming language.
var countryName = "India";
/* console.log(countryname); // error: countryname is not defined. */
console.log(countryName);

