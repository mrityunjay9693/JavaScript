//Array Declaration:
//1.Using JS Array Literal
//Syntax : let/var/const arrayName = [value1, value2, value3, ...nth_value]

let arr = []; // Array is declared without any value inside it i.e., an empty array
console.log("Empty array: ");
console.log(arr);

//array using let keyword.
let fruits = ["Apple", "Orange", "Mango", "Lichi"];
console.log(fruits);

//array using var keyword.
var seasonNames = ["Summer", "Winter", "Rainy season", "Spring"];
console.log(seasonNames);

//array using const keyword.
const greet = ["Hello", "Welcome", "to", "tilde~"];
console.log(greet);

//2.Using Array Constructor:
//Syntax : let/var arrayName = new Array(size);
//An empty array is created by invoking the array constructor with the new keyword. 
let cityName = new Array(4); // An empty array of size 4
cityName[0] = "Muzaffarpur";
cityName[1] = "Bhagalpur";
cityName[2] = "Patna";
cityName[3] = "Darbangha";
console.log(cityName);

//we can also create an array with initial values by passing the values as arguments to the array constructor
let num = new Array(5, 4, 6, 9);
console.log(num);

// Array having items of same data type.
let stateName = ["Bihar", "Madhya Pradesh", "Gujrat", "Punjab", "Haryana"];
console.log(stateName);

// Array having items of different data type.
let aboutLaptop = ["Lenovo", 56000, true, "black", undefined, null];
console.log(aboutLaptop);


//We can even stodre an array in JavaSCript's arrays as shown in below example:
let carsDetails = [["BMW", "Audi", "Mahindra"], "Black", "150 KMPH", 40];
console.log(carsDetails);

