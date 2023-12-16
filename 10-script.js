/* Create a function that receives a number and evaluates whether it is a palindrome 
   (reads the same forwards and backwards). myFunction(2002) will return true */

   const isPalindrome = (number = 0) => {
    if (!number) return console.warn("You did not enter a number");

    if (typeof number !== "number") return console.error(`The value "${number}" entered is not a number`);

    number = number.toString();
    let reversed = number.split("").reverse().join("");

    return (number === reversed)
        ? console.info(`It is a palindrome, original number ${number}, reversed number ${reversed}`)
        : console.info(`It is not a palindrome, original number ${number}, reversed number ${reversed}`);
};

isPalindrome();
isPalindrome("19");
isPalindrome({});
isPalindrome(2000);
isPalindrome(5005);
isPalindrome(2002);
isPalindrome(18.99);
isPalindrome(212.212);