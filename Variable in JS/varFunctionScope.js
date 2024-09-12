/**
 * Variables declared with "var" keyword are function-scope. This means that they are only accessible within the function
   in which they are declared.
 * 
 */
//Example 1
function addNum() {
  var num1 = 10;
  var num2 = 20;
  var sum = num1 + num2;
  //console.log("Sum of "+num1+" and "+num2+":");
  console.log(sum); //sum is declared inside addNum() and it is accessible only inside addNum()
}
//console.log("Sum of "+num1+" and "+num2+":"); //Error: num1, num2 is not defined
addNum();

//Example 2: Nested Function Scope
function outerFunction() {
  outerVar = "I'm outside!";

  function innerFunction() {
    console.log(outerVar);
  }
  innerFunction();
}
outerFunction();

//Example 2: Nested Function Scope, in which members of innerFunction() will use outside the innerFunction, 
//either in outerFunction() or outside outersideFunction. 
//Then there will be error that the member is not defined.

function outerSideFunction() {
  outsideVar = "I'm outsider!";

  function innerSideFunction() {
    var innerVar = "I'm insider!";
    console.log(outsideVar);
  }
  //console.log(innerVar); // Error: innerVar is not defined. 
  innerSideFunction();
}
outerSideFunction();