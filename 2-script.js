/* Program a function that returns the text trimmed according to the specified number of
characters. myFunction("Hello world",2) will return "Hello" */

const text = prompt("Enter a text");
const length = parseInt(prompt("Enter the length"));

const trimmedText = (string="",maxLength=undefined) => 
(!string)
? console.warn("You didn't enter the text string")
:(maxLength === undefined)
? console.warn("You didn't enter the length to trim the text")
: console.info(string.slice(0,maxLength))

trimmedText(text,length);