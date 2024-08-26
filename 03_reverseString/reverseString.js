const reverseString = function(text) {
    let characters = text.split("");
    let reversedText ="";
    for (i=characters.length -1; i>=0; i--) {
        reversedText += characters[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
