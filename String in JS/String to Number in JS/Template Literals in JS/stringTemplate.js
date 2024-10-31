/**
 * Writing any any text inside backtick characters which returns the string.
 */

let str1 = `Hello World,`;
let str2 = `Welcome to tilde,`;
let str3 = `This is the template literals, informly known as string template.`;

console.log(str1);
console.log(str2);
console.log(str3);

// If you want length and type of string, the same method which we used with string written inside double quotes
//can be used here

console.log(
  `length of str1, str2, str3 are :` +
    str1.length +
    ", " +
    str2.length +
    ", " +
    str3.length +
    " " +
    `respectively.`
);
console.log(typeof str1, typeof str2, typeof str3);
