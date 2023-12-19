/*Inheritance
create a base class called 'Animal' with a method speak(). Then, create derived classes
like dog and cat that inheritate from the Animal class and overwrite the speak() method.*/

// Base class Animal
class Animal {
    constructor({ id, age, genre, type_animal }) {
      this.id = id;
      this.age = age;
      this.genre = genre;
      this.type_animal = type_animal;
    }
  
    speak() {
      return `I'm a ${this.type_animal}`;
    }
  }
  
  // Derived class Dog
  class Dog extends Animal {
    constructor(data) {
      super(data); // Call the parent constructor to initialize shared properties
    }
  
    speak() {
      return "Woof!"; // Override the speak() method with a dog-specific sound
    }
  }
  
  // Derived class Cat
  class Cat extends Animal {
    constructor(data) {
      super(data); // Call the parent constructor
    }
  
    speak() {
      return "Meow!"; // Override the speak() method with a cat-specific sound
    }
  }
  
  // Create instances of Dog and Cat
  const dogInstance = new Dog({
    id: "dsafaf",
    age: 23,
    genre: "male",
    type_animal: "dog",
  });
  
  const catInstance = new Cat({
    id: "dsafaf",
    age: 23,
    genre: "female",
    type_animal: "cat",
  });
  
  // Test the speak() methods
  console.log(dogInstance.speak()); // Output: Woof!
  console.log(catInstance.speak()); // Output: Meow!  