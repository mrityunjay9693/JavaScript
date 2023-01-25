/**
 * Variables:->Variable in JavaScript is the most basic building block programming entity 
               a)which is used to store information.
               b)these information can be used in the program later 
               c)and if possible, can be altred/changed. 
             ->Variable name in JavaScript in case-sensitive.
    
 * Creation/Declaration of Variable in JS :
            ->Systax : var/let/const variable_name = values;  // values/data/information can be : an integer, a string etc.
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
firstName = "SushnaSwaraj";  //value/data of firstName vartiable is changed here.
lastName = "Swaraj"          //value/data of lastName vartiable is changed here
let cityNamee = "New Delhi";
/*cityName = "New Delhi";   //error : Assignment to constant variable */
console.log(firstName);
console.log(lastName);
console.log(cityName);

//Ex 2:

