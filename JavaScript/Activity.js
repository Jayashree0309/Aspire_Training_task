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
const kamal = students.find(findStudentByName);

console.log("First Student Named Kamal: ", kamal);
console.log("\n");

console.log("-----------findIndex function------------");
function isKathir(student) {
    return student.name === "Kathir";
}
const Index = students.findIndex(isKathir);
console.log("Index of First Student Named Kathir: ", Index);
console.log("\n");

console.log("-----------setTimeout function------------");
function greet() {
    console.log('Hello, Js!');
}
setTimeout(greet, 1000); 



