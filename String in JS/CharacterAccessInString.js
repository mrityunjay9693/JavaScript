/**
 * In JavaScript, there are two ways to access an individual character of a String. These are :
   1] Using charAt() method.
   2] Using String indexing : In this way, we used to treat the string as an array like object, where each
                              individual characters have their own index or position.
 */
let gameName = "Cricket";
let schoolName = "Holy Mission SR SEC SCH";

//1] Using charAt() method.
let ch = "Cricket".charAt(0);
console.log(ch);
console.log("Cricket".charAt(1));

//2] Using string indexing
let ch1 = schoolName.charAt(0);
console.log(ch1);
console.log(schoolName.charAt(1));