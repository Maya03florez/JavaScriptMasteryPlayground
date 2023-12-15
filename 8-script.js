/* Create a function that removes a specific pattern of characters from a given text.
   myFunction("xyz1,xyz2,xyz3,xyz4,xyz5","xyz") will return (1,2,3,4,5) */

const removeCharacters = (text = "", pattern = "") => 
(!text)
? console.warn("You did not enter any text")
: (!pattern)
? console.warn("You did not enter a character pattern")
: console.info(text.replace(new RegExp(pattern, "ig"), ""));
 
 removeCharacters();
 removeCharacters("xyz1,xyz2,xyz3,xyz4,xyz5");
 removeCharacters("xyz1,xyz2,xyz3,xyz4,xyz5","xyz");
 