/*Title: Javascript Activity
  Author: S.Jayashree
  Created Date: 27.03.2024
  Last modified Date: 27.03.2024
  Reviewed By:
  Reviewed Date: 
*/

//Array 
const Studentdetails=["StudentId","Name","Standard","age","gender"];
console.log(names);
console.log(names.pop());
console.log(names.push("Marks"));
console.log(names);
let arrlen=names.length;
console.log(arrlen);

console.log("-----------find function------------");
const students = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Kamal" },
    { id: 3, name: "Vijay" },
    { id: 4, name: "Bharat" },
    { id: 5, name: "Kathir" }
];

function findStudentByName(student) {
    return student.name === "Kamal";
}
const stdName = students.find(findStudentByName);

console.log("First Student Named Kamal: ", stdName);
console.log("\n");

console.log("-----------findIndex function------------");
function isStudent(student) {
    return student.name === "Kathir";
}
const Index = students.findIndex(isStudent);
console.log("Index of First Student Named Kathir: ", Index);
console.log("\n");

console.log("-----------setTimeout function------------");
function greet() {
    console.log('Hello, Js!');
}
setTimeout(greet, 1000); 



