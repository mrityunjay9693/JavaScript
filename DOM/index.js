//console.dir(window.document);
//Selecting an Element by using different methods of "document" object.
//1. Selecting an Element using "get element by id" : It takes name of id of the element as input.
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));
console.log(typeof document.getElementById("main-heading"));    //Return : object

//Storing object in a variable declared using "const"
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading); 