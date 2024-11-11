/**
 * toString() method is used to convert Numbers, Booleans, and Objects into strings.
 * Syntax: (Numbers).toString(); or, (true/false).toString(); or, ({}).toString(); here, ({}) is an object.
 */

var phoneNumber = (8002947572).toString();
let booleanString = (true).toString();
const objString = ({}).toString({});

console.log(phoneNumber);       //Output: 8002947572
console.log(booleanString);     //Output: true
console.log(objString);         //Output: [object Object]
