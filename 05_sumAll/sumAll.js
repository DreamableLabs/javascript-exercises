const sumAll = function(a, b) {

    // Inputs must be non-negative
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    // Inputs must be integers
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
