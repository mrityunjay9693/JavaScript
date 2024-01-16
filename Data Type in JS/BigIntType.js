/**
 *  BigInt Type : The variable with bigint type is used to store numeric value greater than 2^53-1. It is a primitive 
                 data type. There are two ways to make/declare numeric value as bigint type which is mentioned as below:
                 a)Using BigInt() constructor.
                 b)By appending "n" to the end of input numeric value. 
 *  We can use ar, let and const keyword with the variable to be declared as bigint type.              
 */
let num = 123; // input value of number type.
console.log(num); //123

let value = 9007199254740991; //input value of number type, which can only store value upto 9007199254740991.
console.log(value);

//Now, in below example, I am going to take value greater than 9007199254740991(2^53), then it will be encounter
//a precision issue
let value1 = 90071992547409911;
console.log("value1: " + value1); //90071992547409900, a precision issue which is due to 90071992547409911 > 2^53
/*
 * To avoid above precision issue due to input value greater than 2^53, BigInt is used 
   which stores value greater than 2^53 and there is no issue like precision issue. The BigInt has no such limited 
   precision like number type and BigInt doesn't has any such certain point, beyond which it will stop to 
   represents like number type. In below example we will see how we will use BigInt type to store larger data greater 
   than 2^53. We will also use var, let, const while declaring a variable to bigint type one by one as shown below: 
  
 */

//1]using var
var num1 = BigInt(1238408340830948033808043n);
console.log(num1); //1238408340830948033808043n , here alphabet "n" is append with value with bigint type and
//it is an identification that the input value is bigint type
console.log(typeof num1); // bigint : its type is bigint.

//using let
let num2 = BigInt(890071992547409911n); //input value i.e., 90071992547409911 is greater than 2^53-1 and is declare as bigint type.
console.log(num2); //90071992547409911n
console.log(typeof num2); //type: bigint

//using const
const noOfStars = BigInt(10000000000);
console.log("Number of stars in Akash Ganga Galaxy:" + noOfStars + " billion");
console.log(typeof noOfStars);
console.log(noOfStars);

/**
 * There are two ways to declare a value to bigint type
   a)using BigInt() constructor.
   b)By append "n" to the end of input numeric value
 */

//a)using BigInt() constructor.
let mobileNumber = BigInt(8002947572);
console.log(mobileNumber); //8002947572n
console.log(typeof mobileNumber); //type : bigint

//b)By appending n to the end of input numeric value.
let myNumber = 80029475728825160825n; //append n to the end of myNumber
console.log(myNumber);               //80029475728825160825n
console.log(typeof myNumber);       //type : bigint
