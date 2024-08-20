const reverseString = function(str) {
    output = ''
    let arr = str.split('');
    while (arr.length > 0) {
        output += arr.pop();
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
