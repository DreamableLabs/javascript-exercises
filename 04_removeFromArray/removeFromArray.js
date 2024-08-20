const removeFromArray = function(arr, ...args) {
    return arr.filter(e => args.indexOf(e) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
