/**
 * Operation with pi Constant value:
 * Write a JavaScript program to find out area and circumference of circle.
 * Input : 5
   Output: Area of circle: 78.5
           Circumference of circle: 31.400000000000002
 */
let radius = 5;
//constant pi value: 
const pi = 3.14;

let areaOfCircle = pi * radius * radius;
let circumferenceOfCircle = 2 * pi * radius;

console.log("Area of circle: "+areaOfCircle);
console.log("Circumference of circle: "+circumferenceOfCircle);