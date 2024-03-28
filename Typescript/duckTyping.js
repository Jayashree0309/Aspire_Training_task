// Function that accepts objects with specific properties
function printDetails(obj) {
    console.log("Name: ".concat(obj.name));
    if ('makeSound' in obj) {
        obj.makeSound();
    }
    else if ('greet' in obj) {
        obj.greet();
    }
}
// Create objects that satisfy the expected properties
var dog = {
    name: 'Dog',
    makeSound: function () {
        console.log('Woof woof!');
    },
};
var js = {
    name: 'Jai',
    greet: function () {
        console.log('Hello there!');
    },
};
// Call the function with different objects
printDetails(dog);
printDetails(js);
