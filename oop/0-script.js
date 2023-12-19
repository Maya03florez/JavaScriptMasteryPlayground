/*Define a class called 'Person' with attributes with 'name' and 'age',
 create instances of this class and show information about them.*/


 class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }

    description() {
        return `My name is ${this.name} and I'm ${this.age} years old.`;
    }
};

const john = new Person({name: "Jhon", age: 25});
console.log(john.description());



// constructor function, another implementation

function Persona(name, age) {
    this.name = name;
    this.age = age;

    this.description = function() {
        return `My name is ${this.name} and I'm ${this.age} years old.`;
    };
}

const juan = new Persona("Juan", 34);
console.log(juan.description());