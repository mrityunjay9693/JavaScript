//1] Using toString() method: 
let value = 12;

let newValue = value.toString(); //converts 12 to a "12" which is a string type

console.log(newValue);          // "12"
console.log("Value:"+value +" is a "+typeof value)
console.log("newValue:"+newValue +", after using toString(converting number to string is a "+typeof newValue);

let num1 = 100.00;
console.log(num1.toString());
//console.log(typeof num1.toString());

// We can also use any number value to convert it into string, directly with toString() method
// without storing the number value in any variable. You must make sure that, 
//number value should be taken within parenthesis
// console.log((54).toString);
// console.log(typeof (54).toString);
console.log((54).toString());
console.log(typeof (54).toString());

console.log((77).toString(2));
console.log(typeof (77).toString(2));

//Converting Nan to String type:
let nan = NaN;

let newNan = nan.toString();

console.log("type of Nan:"+typeof nan);
console.log(newNan);
console.log(typeof newNan);