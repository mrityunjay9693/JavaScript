/*
  Achieve this output: My name is Mrityunjay Kumar, Roll number is MCAL0030, and I am a MCA students of Jain University.
*/
let studentName = "Mrityunjay Kumar";
let rollNumber = "MCAL0030";
let branch = "MCA";
let collegeName = "Jain University";

//storing in a variable and then returned the statement.
let detailStudent = `My name is ${studentName}, Roll number is ${rollNumber}, and I am a ${branch} student of ${collegeName}.`;
console.log(detailStudent);

//Returning the statement directly.
console.log(
  `My name is ${studentName}, Roll number is ${rollNumber}, and I am a ${branch} student of ${collegeName}.`
);
