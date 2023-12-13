/* Program a function that validates whether a given word or phrase is a palindrome
(that reads the same forwards and backwards). myFunction("salas") will return true */

// function palindrome(text) {
//     reversedText = text.split("").reverse().join("");

//     if (!text) return console.warn("You didn't enter the text");

//     if (reversedText === text) {
//         console.info(`The word ${text} is a palindrome`);
//     } else {
//         console.warn("It is not a palindrome");
//     }
// }

// palindrome("");
// palindrome("salas");
// palindrome("platzi");



//\/\/\/\/\/\/\\/\/\/\\/\/\/\/\/\/\/\/\\/\/\/\/\/\\/\/\/\\/\/\/\/\/\\/\/\/\/\\/

const palindrome = (word="") => {
    if (!word) return console.warn("You didn't enter a word or phrase");

    word = word.toLowerCase();
    let reversed = word.split("").reverse().join("");

    return (word === reversed)
        ? console.info(`It is a palindrome, original word: ${word}, reversed word: ${reversed}`)
        : console.info(`It is not a palindrome, original word: ${word}, reversed word: ${reversed}`);
};

palindrome();
palindrome("hello world");
palindrome("salaS");

