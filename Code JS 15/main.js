// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
    let finalStr = str.substring(1, str.length-1);
    return finalStr;
}
console.log(removeChar('eloquent'));

// I must admit I took a longer route than expected, but I got the intended result in the end.

// ||

function removeChar(str) {
    return str.slice(1, -1);
}

// Loved this solution! I intend to use it from now on.

// ||

const removeChar = str => str.slice(1,-1)

// ||

function removeChar(str){
    return str.substring(1, str.length-1);
   };
   