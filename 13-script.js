/* Program a function that determine wether a number is even or odd. myFunction(29)
will return odd*/

function checkEvenOrOdd(inputNumber) {
    // Check if a number is provided
    if (!inputNumber) {
        console.warn("You did not enter a number");
        return;
    }

    // Check if the provided value is a number
    if (typeof inputNumber !== "number") {
        console.error(`The value "${inputNumber}" entered is not a number`);
        return;
    }

    // Check if the number is even or odd
    if (inputNumber % 2 === 0) {
        console.log(`${inputNumber} is even`);
    } else {
        console.log(`${inputNumber} is odd`);
    }
}

// Test cases
checkEvenOrOdd();      // You did not enter a number
checkEvenOrOdd(-1);    // Number cannot be negative
checkEvenOrOdd(0);     // Number can't be zero
checkEvenOrOdd(2);     // 2 is even
checkEvenOrOdd(3);     // 3 is odd
checkEvenOrOdd(4);     // 4 is even
checkEvenOrOdd("5");   // The value "5" entered is not a number


//\/\/\/\/\/\/\/\/\\/\/\/\/\/\\/\/\/\/\\/\/\/\/\\/\/\/\/\/\\/\/\/\/\\/\/\/\/\/\/\/\\/

console.log("\n");

const evenOddNumber = (number = undefined) => {
    if (!number) return console.warn("You did not enter a number");

    if (typeof number !== "number") return console.error(`The value "${number}" entered is not a number`);

    return ((number % 2) == 0)
        ? console.info(`The number ${number} is even`)
        : console.info(`The number ${number} is odd`);
};

evenOddNumber();
evenOddNumber("23");
evenOddNumber(-398);
evenOddNumber(19);