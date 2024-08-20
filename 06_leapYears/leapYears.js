const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isYearDivisibleByOneHundred = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    return isYearDivisibleByFourHundred || isYearDivisibleByFour && !isYearDivisibleByOneHundred;
};

// Do not edit below this line
module.exports = leapYears;
