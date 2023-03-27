const reverseString = function(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--){
        reversed += word[i]
    }
    return reversed;
};

// In the solution, we see the use of string.split which separates it into a list using some delimiter
// Array.reverse which reverses an array in place and returns the same array
// Array.join using the "" delimiter, to join an array into a string, by concatenating all of the elements in an array.

// Do not edit below this line
module.exports = reverseString;
