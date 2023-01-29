/**
Length of String: Length of string can be defined as "number of characters present in given string" is the 
                  length of string. If there is any space available inside sequence of characters of given
                  string, the space is also included in the length of string. 
How to find length of String : 
                  By using in-built function : VariableName.length
*/
let countryName = "India";
let lengthOfString = countryName.length;
console.log("Length of"+countryName+":",lengthOfString);

let nameOfStudent = "Mrityunjay Kumar";
console.log(nameOfStudent.length);

//Now, suppose user wants to find out the character available at last index. Then, 
let cityName = "Muzaffarpur";
let charAtLastIndex = cityName[cityName.length-1];
console.log(charAtLastIndex); 
console.log("Second-last caharcter of"+countryName+":",countryName[countryName.length-2]);