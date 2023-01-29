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
//1.Creatingnew variable
let countryName = "  India  ";
console.log("String before trim:"+countryName);
console.log(countryName.length); // total number of characters : 9(length of string)
let newName = countryName.trim(); // "India"
console.log("String after trim:");
console.log(newName);

//2.Using same variable:
let stateName = "  Bihar   ";
console.log("String before trim:"+stateName);
stateName = stateName.trim();
console.log("String after trim:");
console.log(stateName);

/**
 *If you want to remove whitespaces of given string from any one side. Then we have following two ways :
  1.trimStart() : It removes whitespaces from begining of the given string and return new string.
  2.trimEnd() : It removes whitespaces from end side of the given string and return new string. 
 */
//1.trimStart()
let cityName = "  Muzaffarpur   ";
cityName = cityName.trimStart();
console.log(cityName);

//1.trimEnd()
let houseName = " Yadavas Villas  ";
houseName = houseName.trimEnd();
console.log(houseName);