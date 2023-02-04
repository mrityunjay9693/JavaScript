//3]Concatenating an Empty String:
let countryCode = 91;

let country_Code = countryCode + "";
console.log(country_Code);

console.log(
  "Here, countryCode:" + countryCode + ", is a " + typeof countryCode + " type"
);
console.log(
  "After using empty string to convert number to string, countryCode:" +
    country_Code +
    " is a " +
    typeof country_Code +
    " type"
);
let age = 25;
let newAge = "" + age;
console.log(
  "After using empty string, " + age,
  typeof age + " becomes " + newAge,
  typeof newAge + " type."
);

// "undefined" and "null" values be converted to string respectively, using empty string:
let myAge; //undefined
console.log("undefined to string:")
console.log(typeof (myAge + ""));

let n1 = null;
console.log("undefined to string:");
console.log(typeof (n1 + ""));

console.log("undefined to string: " ,(typeof (undefined + "")));
console.log("null to string: " , (typeof (null + "")));
