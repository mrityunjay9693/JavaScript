/**
 * undefined in JS means variable is declared but any value has not been assigned to it then by default JavaScript 
 * assigns a value which is "undefined".
 * Undefined is a global read-only variable which represents the value "undefined".
 * Undefined is a type of primitive type.
 * By default, the variable is stored with an undefined value.
 */
//Both, num and myName contains undefined.
let num = undefined;
console.log(num);          // undefined
console.group(typeof num); // Type : undefined

let myName;
console.log(myName); 
console.log(typeof myName); 
