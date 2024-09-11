/**
 * Variables declared with "var" keyword are function-scope. This means that they are only accessible within the function
   in which they are declared.
 * 
 */
function addNum(){
    var num1 = 10;
    var num2 = 20;
    var sum = num1+num2;
    //console.log("Sum of "+num1+" and "+num2+":");
    console.log(sum); //sum is declared inside addNum() and it is accessible only inside addNum()
}
console.log("Sum of "+num1+" and "+num2+":"); //Error: num1, num2 is not defined
addNum();
