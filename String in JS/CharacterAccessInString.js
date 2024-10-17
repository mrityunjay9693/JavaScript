/**
 * In JavaScript, there are two ways to access an individual character of a String. These are :
   1] Using charAt() method.
   2] Using String indexing : In this way, we used to treat the string as an array like object, where each
                              individual characters have their own index or position.
 */

//1] Using charAt() method.
let gameName = "Cricket";
let ch = gameName.charAt(0);  //getting the character at index 0 from the variable "gameName"
let ch1 = "Cricket".charAt(1);  //getting the character at index 1 from the value of the variable "gameName", 
                                //which is "Cricket"
console.log(ch);
console.log(ch1);
console.log("Cricket".charAt(2)); //logs the character at index 2 from the string "Cricket"

//2] Using string indexing
let schoolName = "Holy Mission SR SEC SCH"; 
let ch2 = schoolName.charAt(0); // getting the character at index 0 from the value of "schoolName"
console.log(ch2);               // logs the character at index 0, which is 'H'
console.log(schoolName.charAt(1));  // logs the character at index 1, which is 'o'
console.log("Holy Mission SR SEC SCH".charAt(2)); //logs the character at index 2 from the string "Holy Mission SR SEC SCH"