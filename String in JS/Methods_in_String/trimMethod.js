/**
trim(): trim() method of string in JS is used to remove whitespaces(space characters) from both ends of the string and
        return a new string. It will not modify the existing(original) string. You have to either store modified string 
        in the new variable or you have to store modified string in the same variable as shown below
        Syntax : variableName.trim()
        let name = "  Mrityunjay  ";
        name.trim(); 
        console.log(name); // "  Mrityunjay  "; //here, string store in name is not modified. 
        let newVariable = name.trim(); // "Mrityunjay", here new variable is taken 
        name = name.trim(); // "Mrityunjay"
*/
//1.Creating new variable
let countryName = "  India  ";
console.log("String before trim:" + countryName); //Output:  India      
console.log(countryName.length); // total number of characters : 9(length of string)
let newName = countryName.trim(); // "India"
console.log("String after trim: ");
console.log(newName); //Output:String after trim: India


let subjectName = " JavaScript ";
subjectName.trim(); //This returns the trimmed string but doesn't modify the original 'subjectName' 
console.log("After trim:" + subjectName); //After trim:" JavaScript ""
/**
 * What’s happening here : since strings in JavaScript are immutable, meaning the original value of subjectName doesn’t 
   change after calling the trim() method with subjectName. The trim() function creates a new string with leading and trailing
   whitespaces removed but doesn’t alter the original subjectName string itself. Since you haven’t stored the result of the 
   trim() operation in your code, the original subjectName remains unchanged.

 */

//Correct Approach: To fix this issue,we need to assign/store the result of subjectName.trim() 
//either in (i)same variable or (ii)in new one, like this:

//(i)same variable
subjectName = subjectName.trim(); //Store the result of `trim()` in `subjectName` i.e., same variable
console.log("Store the result of `trim()` in `subjectName`:" + subjectName); //"JavaScript"

//(ii)or, using a new variable
let newSubjectValue = subjectName.trim();
console.log("In new variable:" + newSubjectValue); //"JavaScript"

// Use the trim() method directly in console.log() to remove leading and trailing whitespace
console.log(subjectName.trim());

//2.Using same variable:
let stateName = "  Bihar   ";
console.log("String before trim:" + stateName); //Output:String before trim:  Bihar   
stateName = stateName.trim();
console.log("String after trim:");
console.log(stateName); ////Output: Bihar

/**
 *If you want to remove whitespaces of given string from any one side. Then we have following two ways :
  1.trimStart() : It removes whitespaces from begining of the given string and return new string.
  2.trimEnd() : It removes whitespaces from end side of the given string and return new string. 
 */
//1.trimStart()
let cityName = "  Muzaffarpur   ";
cityName = cityName.trimStart();
console.log(cityName);

//2.trimEnd()
let houseName = " Yadavas Villas  ";
houseName = houseName.trimEnd();
console.log(houseName);

//Suppose we have a string value with leading whitespaces and without trailing whitespaces. Then we can remove the
//leading whitesapces either using (i)trim() method 
//(ii)as well as using trimStart().

//(i)using trim()
let animalName = "  Cat";
console.log("Before trim:");
console.log(animalName);          //animalName = "  Cat"
console.log("After removing spaces using trim():");
console.log(animalName.trim());  //Output: "Cat" : Leading whitespaces are removed

//(ii)using trimStart()
let birdName = "  Owl"
console.log("After removing spaces using trimStart():");
console.log(birdName.trimStart());  //Output: "Owl"