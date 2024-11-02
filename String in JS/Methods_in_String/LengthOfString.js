/**
Length of String: Length of string can be defined as "number of characters present in given string" is the 
                  length of string. If there is any space available inside sequence of characters of given
                  string, the space is also included in the length of string. 
How to find length of String : We can find out length of a given string by using in-built JavaScript 
                               function(property) known as ".length" (read as dot length)
                      Syntax : variableName.length;
                      Example: string : I   N    D   I   A
                                index : 0   1    2   3   4      
                      
*/
let countryName = "India";
let lengthOfString = countryName.length;
console.log("Length of"+countryName+":",lengthOfString); //Output: 5

let nameOfStudent = "Mrityunjay Kumar";
console.log(nameOfStudent.length); //Output: 16

//Now, suppose user wants to find out the character available at last index. Then, 
let cityName = "Muzaffarpur";
let charAtLastIndex = cityName[cityName.length-1];
console.log(charAtLastIndex); 
console.log("Second-last caharcter of"+countryName+":",countryName[countryName.length-2]); // output: r (r is the last character)

//Spaces within a string are also counted when calculating the length of the string.
let message = "India has twenty eight states and eight Union Territories."
console.log("Length of message: "+message.length);