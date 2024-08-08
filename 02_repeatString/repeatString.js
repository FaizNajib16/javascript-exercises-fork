const repeatString = function(string, number) {
    if (times < 0) return "ERROR";
    let appendString = string;
    for (let i = 1; i < number; i++) {
        string += appendString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
