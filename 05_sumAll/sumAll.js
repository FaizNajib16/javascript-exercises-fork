const sumAll = function(number1, number2) {

    if(number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)){
        return "ERROR";
    }
    
    let sum = 0;

    // Swap numbers if number1 is greater than number2
    if(number1 > number2){
        const temp = number1;
        number1 = number2;
        number2 = temp;
    }

    for(let number = number1; number <= number2; ++number){
        sum += number;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*
START
FUNCTION sumAll takes two numbers
    SET sum to 0
    FOR the range of number from number 1 to number 2
        INCREMENT sum by number
    ENDFOR
    RETURN sum
END FUNCTION
END

*/