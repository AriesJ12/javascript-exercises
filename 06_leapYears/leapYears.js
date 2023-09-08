const leapYears = function(year) {
    const DIVISIBLE = {four : 4, four_hundred: 400};
    const NOT_DIVISIBLE = 100;
    let result = false;
    if (year%DIVISIBLE.four === 0)
    {
        result = true;
    }
    if (year%NOT_DIVISIBLE === 0)
    {
        result = false;
    }
    if (year%DIVISIBLE.four_hundred === 0)
    {
        result = true;
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
