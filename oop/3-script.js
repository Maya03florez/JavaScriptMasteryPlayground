// Polymorphism:
// Create a Figure class with a calculateArea() method. Then, create derived classes
// like Circle and Rectangle that implement the method differently.

class Figure {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        // Method to calculate and return the area based on width and height
        return `Calculating the area with a width of ${this.width} and a height of ${this.height}`;
    }
}

class Circle extends Figure {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }

    calculateArea() {
        // Override the base class method to include circle-specific area calculation
        const area = (this.radius**2) * Math.PI;
        return `${super.calculateArea()} and a radius of ${this.radius}, so the area would be ${area} cm2`;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super(width, height);
    }

    calculateArea() {
        // Override the base class method to include rectangle-specific area calculation
        const area = this.width * this.height;
        return `${super.calculateArea()}. The area is ${area}`;
    }
}

const circle = new Circle(10, 10, 5);
const rectangle = new Rectangle(10, 10);

// Test the overridden methods for Circle and Rectangle
console.log(circle.calculateArea());
// Calculating the area with a width of 10 and a height of 10 and a radius of 5

console.log(rectangle.calculateArea());
// Calculating the area with a width of 10 and a height of 10. The area is 100