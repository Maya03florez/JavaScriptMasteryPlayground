/* Write a function to convert Celsius to Fahrenheit and vice versa.
myFunction(0,"c") will return 32 F*/

// Function to convert temperatures
const convertTemperature = (degrees = undefined, unit = undefined) => {
    // Check if degrees are provided
    if (degrees === undefined) return console.warn("You didn't enter degrees to convert");

    // Check if degrees is a number
    if (typeof degrees !== "number") return console.error(`The value ${degrees} entered is not a number`);

    // Check if unit is provided
    if (unit === undefined) return console.warn("You didn't enter the type of degrees to convert");

    // Check if unit is a string
    if (typeof unit !== "string") return console.error(`The value ${unit} is not a string`);

    // Check if the unit string length is not equal to 1
    if (unit.length !== 1) return console.warn("Unrecognized unit value");

    // Conversion from Celsius to Fahrenheit
    if (unit === "C") {
        return console.info(`${degrees}°C = ${Math.round((degrees * 9 / 5) + 32)}°F`);
    } else if (unit === "F") { // Conversion from Fahrenheit to Celsius
        return console.info(`${degrees}°F = ${Math.round(((degrees - 32) * 5 / 9))}°C`);
    };
};

// Testing the function with different cases
convertTemperature(); // No input given
convertTemperature("2"); // Only one input given (not a number)
convertTemperature(2); // No unit given
convertTemperature(2, true); // Invalid unit type
convertTemperature(2, "hola"); // Invalid unit value
convertTemperature(2, "e"); // Invalid unit value
convertTemperature(2, "C"); // Celsius to Fahrenheit
convertTemperature(100, "C"); // Celsius to Fahrenheit
convertTemperature(32, "F"); // Fahrenheit to Celsius
convertTemperature(100, "F"); // Fahrenheit to Celsius
