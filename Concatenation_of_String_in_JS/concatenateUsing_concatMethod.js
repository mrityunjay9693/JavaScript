//2]Using the: concat() method/function

//Ex1: When value of input string and parameters have string type.
//In the below example, we have a variable "str" which has a string value. Two more string values are
//passed to concat() method to concatenate with str, which will concatenate all the strings.
let str = "Good Morning";
let greet = str.concat(", ", "Welcome to tilde.");
console.log(greet);

//Ex2: We can also pass a variable as parameter which has string value to be concatenated with input string
//and returns a new string.
let hello = "Hello";
let world = "World.";
let greet2 = hello.concat(" ", world); //We can also pass an "empty-string value"
console.log(greet2);

//Since JavaScipt is immutable in nature, therefore after concatenation process,
//original string values inside 'hello' and 'world' is not modified/altered at all.
console.log(hello, world);

//Ex3: Concatenation of an Array of Strings values: We can also concatenate values of array to the end of the given string
let citiesName = ["Lucknow", "Kolkata", "Patna", "Bangalore", "Jaipur"];
let output = "Indian Cities: ".concat(citiesName);
let output1 = "Indian Cities: ".concat(...citiesName);
console.log(output);    //Indian Cities: New Delhi,Kolkata,Patna,Bangalore,Jaipur
console.log(output1);  //Spread operator is used-> Indian Cities: New DelhiKolkataPatnaBangaloreJaipur
