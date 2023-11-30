/*Programming exercises
Write a function that counts the number of characters in a string. myFunction('hello world') will return 11 */

function countStrings(string=""){
    if (! string){
        console.log("No string found");
    }else{
        console.log(`the amount of characters of ${string} is ${string.length}`);
    };
};
countStrings("");
countStrings("hello world");

//////////////////////////////////////////////

function countCharacters(string) {
    if (!string) {
      console.error("Empty string provided");
      return 0;
    }
  
    let characterCount = 0;
    for (const character of string) {
      characterCount++;
    }
    return characterCount;
  }
  
  console.log(countCharacters(""));
  console.log(countCharacters("hello world"));
  