const sumAll = function (num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0) {
        sum = "ERROR";
        return sum;
    }
    else if (Number(num1) !== num1 || Number(num2) !== num2) {
        sum = "ERROR";
        return sum;
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num1)) {
        sum = "ERROR";
        return sum;
    }
    else {
        if (num1 < num2) {
            for (var i = num1; i <= num2; i++) 
            sum += i;
            return sum;
        }
        else if (num2 < num1) {
            for (var i = num2; i <= num1; i++) 
            sum += i;
            return sum;
        }
            
    }


};

// Do not edit below this line
module.exports = sumAll;
