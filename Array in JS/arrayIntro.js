//Array Declaration:
//1.Using JS Array Literal
//Syntax : let/var arrayName = [value1, value2, value3, ...nth_value]
let arr = []; // Array is declared without any value inside it i.e., an empty array
console.log("Empty array: ");
console.log(arr);

const greet = ["Hello", "Welcome", "to", "tilde~"];
console.log(greet);

let fruits = ["Apple", "Orange", "Mango", "Lichi"];
console.log(fruits);

//2.Using Array Constructor
//Syntax : let/var arrayName = new Array(size);
let num = new Array(5, 4, 6, 9);
console.log(num);

let cityName = new Array(4);
cityName[0] = "Muzaffarpur";
cityName[1] = "Bhagalpur";
cityName[2] = "Patna";
cityName[3] = "Darbangha";
console.log(cityName);

// Array having items of same data type.
let stateName = ["Bihar", "Madhya Pradesh", "Gujrat", "Punjab", "Haryana"];
console.log(stateName);

// Array having items of different data type.
let aboutLaptop = ["Lenovo", 56000, true, "black", undefined, null];
console.log(aboutLaptop);


//We can even stodre an array in JavaSCript's arrays as shown in below example:
let carsDetails = [["BMW", "Audi", "Mahindra"], "Black", "150 KMPH", 40];
console.log(carsDetails);
