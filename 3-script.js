/* Program a function that, given a string, returns an array of texts separated by a
specific character. myFunction("Hello how are you"," ") will return ["Hello","how","are","you"] */

const stringToArray = (string="",separator=undefined) => 
(!string)
? console.warn("You didn't enter a text string")
: (separator === undefined)
? console.warn("You didn't enter the separator")
: console.info(string.split(separator))

stringToArray("Lorem ipsum dolor sit", " ")