const sumAll = function(number1, number2) {
    let sum = 0;
    if (number1 < 0 || 
        number2 < 0 ||
        !Number.isInteger(number1) || 
        !Number.isInteger(number2)) {
            return 'ERROR';
        }
    else {
        const min = Math.min(number1, number2);
        const max = Math.max(number1, number2);
        for (let i = min; i <= max; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
