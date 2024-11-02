/**
 * slice() method: In JavaScript, slice() method is used to returns the portion of the array in which the method is 
                   implemented, i.e, a new array is returned which containing a portion of the array. And, the original
                   array will not be altered/modified but instead creates a shallow copy. 
 * The slice() is a method in Array class of JavaScript which returns a shallow copy of a subarray into new array object
   which includes the element from a user-specified "start" index(start parameter) to a user-specified "end" index and
   value of "end" index will not be included in the returned subarray(new array). The original array is not modified.  
 
 * Syntax : 1]With two parameters:   arr.slice(start_index, end_index);
            2]with one parameter:    arr.slice(start)
            3]without any parameter: arr.slice()
 * Value of start index will be included in the subarray but value of last index is excluded.
 * Value for start index is optional. If, value for start index is not specified then default value is taken i.e., 0 and
   if a negative value is used for start index then, it is treated as taking elements from the end of the array.
 * value for end index is optional. If, value for end index is not specified then default value is taken "length of the array"
   and if a negative value is used for end index then, it is treated as taking elements from the end of the array. 
 */
//Ex 1: With two parameters
let stateName = "Bihar";
console.log("Before slice: " + stateName);
let sliceName = stateName.slice(0, 4);
console.log("After slice: " + sliceName);
console.log(stateName.slice(1, 3));
console.log(stateName.slice(2, 4));

//Ex 2: With one parameter
let cityName = ["Muzaffarpur", "Bangalore", "Pune", "Patna"];
let newName = cityName.slice(1); // here, 1 is start index and end index to be considered the length of the array.
console.log(newName);
console.log(cityName.slice(3));

//Ex 3: Without parameters
let countryName = "India";
let newString = countryName.slice(); //start index to be considered as 0 and and end index will be length of the array.
console.log(newString);

let animalName = ["Tiger", "Cat", "Lion", "Leopard"];
let newAnimal = animalName.slice(1, 3);
console.log(newAnimal);
console.log("Original array:" + "[" + animalName + "]"); // Original array will remains the same.
