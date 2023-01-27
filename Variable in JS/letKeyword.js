/**
 * "let" is a keyword which is used for declaration of a variable.
 * It was introduced with ECMAScript 6 to provide an alternate to var keyword(also used for declaration of variable in JS).
 * let declares variable with block-scope. Variable declared with ley keyword are limited to the block, statements 
   or expression where they are defined. 
 */

let schoolName = "Holy Mission SR SEC School."
let cityName = "Muzaffarpur";
console.log(schoolName);
console.log(cityName);

//Re-declaration of the variable with let keyword is not allowed.
//let cityName = "Patna"; //error : cityName has already been declared(redeclaration not allowed)
//console.log(cityName);