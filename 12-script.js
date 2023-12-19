/* Program a function that determines whether a number is prime (meaning it is only divisible by
itself and 1) or not. myFunction(7) will return True*/

// Function to check if a number is prime
const primeNumber = (number = undefined) => {
    // Check if a number is provided
    if (!number) return console.warn("You did not enter a number");
    
    // Check if the provided value is a number
    if (typeof number !== "number") return console.error(`The value "${number}" entered is not a number`);

    // Check if the number is zero, as zero is not a prime number
    if (number === 0) return console.error("Number can't be zero");

    // Check if the number is negative, as prime numbers are greater than 1
    if (Math.sign(number) === -1) return console.error("Number cannot be negative");

    // Initialize a variable to track whether the number is divisible
    let divisible = false;

    // Loop to check divisibility of the number
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            divisible = true;
            // If the number is divisible, break out of the loop
            break;
        }
    }

    // Ternary operator to determine whether the number is prime and log the result
    return divisible
        ? console.log(`The number ${number} is not prime`)
        : console.log(`The number ${number} is prime`);
};

// Test cases
primeNumber();      // No input
primeNumber("320"); // Input is not a number
primeNumber({});    // Input is not a number
primeNumber(-143);  // Input is negative
primeNumber(13);    // Prime number
primeNumber(200);   // Not a prime number
primeNumber(2);     // Prime number