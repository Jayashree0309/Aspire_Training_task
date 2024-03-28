// Define interfaces representing different types of objects
interface Animal {
    name: string;
    makeSound: () => void;
  }
  
  interface Person {
    name: string;
    greet: () => void;
  }
  
  // Function that accepts objects with specific properties
  function printDetails(obj: Animal | Person) {
    console.log(`Name: ${obj.name}`);
    if ('makeSound' in obj) {
      obj.makeSound();
    } else if ('greet' in obj) {
      obj.greet();
    }
  }
  
  // Create objects that satisfy the expected properties
  const dog: Animal = {
    name: 'Dog',
    makeSound() {
      console.log('Woof woof!');
    },
  };
  
  const js: Person = {
    name: 'Jai',
    greet() {
      console.log('Hello there!');
    },
  };
  
  // Call the function with different objects
  printDetails(dog); 
  printDetails(js); 
  