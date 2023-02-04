//2]Using the String() function :
let value = 12;

let newValue = String(value);
console.log(newValue);

console.log("Here, value:" + value + ", is a " + typeof value + " type");
console.log(
  "After using String() constructor/method, value:" +
    newValue +
    " is a " +
    typeof newValue +
    " type"
);

//We can also use String() method to convert any number value into string, directly without storing 
//the number value in any variable and make sure that, 
//number value should be taken within parenthesis
console.log(String(44));
console.log(typeof String(44));

console.log(String(23.10));
console.log(typeof String(23.10));

// Converting "undefined" and "null" values:
let num;
let undefined = String(num);
console.log(undefined);
console.log(typeof undefined);

let age = null;
let newAge = String(age);
console.log(newAge);
console.log(typeof newAge);

// Converting "null" and "undefined" values without storing them in any variable
console.log(String(undefined));
console.log(String(null));

//Let's check out their types:
console.log(typeof String(undefined));
console.log(typeof String(null));
