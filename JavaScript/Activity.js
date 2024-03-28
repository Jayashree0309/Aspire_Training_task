//Array 
const names=["Janani","Jayapriya","Jolin"];
console.log(names);
console.log(names.pop());
console.log(names.push("Jayashree"));
console.log(names);
let arrlen=names.length;
console.log(arrlen);

// Map functions
console.log("-----------Map Function---------------");
const colours = ["red", "yellow", "orange", "pink", "green"];

// convert a string to uppercase
function capitalize(str) {
  return str.toUpperCase();
}
const capitalizedColours = colours.map(capitalize);
console.log("Original Colours: ", colours);
console.log("Capitalized Colurs: ", capitalizedColours);
console.log("--------------sortfunction---------------");
console.log(capitalizedColours.sort());
console.log("--------------Reversefunction---------------");
console.log(capitalizedColours.reverse());


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
const kamal = students.find(findStudentByName);

console.log("First Student Named Kamal: ", kamal);
console.log("\n");

console.log("-----------findIndex function------------");
function isKathir(student) {
    return student.name === "Kathir";
}
const KathirIndex = students.findIndex(isKathir);
console.log("Index of First Student Named Kathir: ", KathirIndex);
console.log("\n");

console.log("-----------setTimeout function------------");
function greet() {
    console.log('Hello, Js!');
}
setTimeout(greet, 1000); 



