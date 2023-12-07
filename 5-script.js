// Write a function that reverses the words of a text string.
// myFunction("Hello World") will return "dlroW olleH"

const reverseString = (str = "") =>
  !str
    ? console.warn("You did not enter a text string")
    : console.info(str.split("").reverse().join(""));

reverseString();
reverseString("Hello World");