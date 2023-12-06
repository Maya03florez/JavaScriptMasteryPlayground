/* Create a function that repeats a text a specified number of times. 
   myFunction("Hello world", 2) will return:
   Hello world
   Hello world 
*/

const repeatText = (text = "", times = undefined) => {
    if (!text) return console.warn("You did not enter any text");

    if (times === undefined) return console.warn("You did not enter the number of times to repeat the text");

    if (times <= 0) return console.error("The number of times must be positive");

    for (let i = 1; i <= times; i++) {
        console.info(`${i} -> ${text}`);
    }
};

repeatText("Hello world", 3);
repeatText("Hello world", 0);
repeatText("Hello world", -3);
repeatText("", 3);
repeatText("Hello world");
