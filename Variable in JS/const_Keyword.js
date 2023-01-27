/**
 * "const" is a keyword in JavaScript which is used to declaring a constant variable that will have a constant value 
    throughout the program. Once a value declared to the variable with const keyword , its value will not be altered further.
 * Re-declaration and re-assigning of the variable declared with const keyword is not allowed here.
 * The "const" declaration creates a read-only reference to a value, and this reference cannot be changed.
 * Variable declared with 'const' keyword is a block-scope.
 * 'const' provides a level of safety and clarity.
*/

const pi = 3.14;
//pi = 3.15; //error : Assignment to constant variable. We cannot changed value of constant variable(using const) after 
            //its initial assignment.
console.log(pi);