// Program a function to count the number of times a word is repeated in a long text.
// myFunction("hello world hello", "world") will return 2

// const countWordInText = (text = "", word = "") => {
//     if (!text) return console.warn("You didn't enter the long text");
//     if (!word) return console.warn("You didn't enter the word to evaluate");
//     let i = 0,
//         counter = 0;
    
//     while (i !== -1) {
//         i = text.indexOf(word, i);
//         if (i !== -1) {
//             i++;
//             counter++;
//         };
//     };
//     return console.info(`The word ${word} is repeated ${counter} times`);
// };

// countWordInText();
// countWordInText("", "world");
// countWordInText("hello world goodbye world");
// countWordInText("hello world goodbye world", "world");

//\/\/\/\/\//\\\\/\/\/\/\\//\\//\/\/\/\\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/

const countWordInText = (text = "", word = "") => {
    if (!text) return console.warn("You didn't enter the long text");
    if (!word) return console.warn("You didn't enter the word to evaluate");

    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    const counter = matches ? matches.length : 0;

    return console.info(`The word '${word}' is repeated ${counter} times`);
};

countWordInText();
countWordInText("", "world");
countWordInText("hello world goodbye world");
countWordInText("hello world goodbye world", "world");
