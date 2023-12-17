/* Write a function that calculates the factorial of a number (The factorial of a positive integer n is 
    defined as the product of all positive integers from 1 to n). For example, myFunction(5) should return 
    120. */

function factorial(n){
    if (n == 1){
        return n
    }else{
        return n * factorial(n - 1)
    };
};

// console.log(factorial(5));

//\/\/\/\/\//\\/\/\/\//\\\/\/\/\/\\/\/\/\/\/\/\\/\/\/\\/\/\/\//\\/\/\

const factorial1 = (number = undefined) => {
    if (!number) return console.warn("You did not enter a number");
    if (typeof number !== "number") return console.error(`The value "${number}" entered is not a number`);

    if (number === 0) return console.error("number can't be zero");

    if(Math.sign(number) === -1) return console.error("number cannot be negative");

    let factorial = 1;
    for (let i = number; i > 1; i--){
        factorial *= i;
    };
    return console.info(`factorial of ${number} is ${factorial}`);
};

factorial1();
factorial1("5");
factorial1(0);
factorial1();
factorial1();
factorial1(8);