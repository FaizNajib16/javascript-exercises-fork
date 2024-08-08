const reverseString = function(word) {
    word = word.split("");
    let reverseWord = "";
    for(letters of word){
        reverseWord = letters + reverseWord; 
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
