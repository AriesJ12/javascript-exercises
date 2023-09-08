
const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0)
    {
        return "ERROR";
    }
    if(min > max)
    {
        let reserve = min;
        min = max;
        max = reserve;
    }
    //uses iteration
    let result = 0;
    for(let i = min; i<= max; i++)
    {
        result += i;
    }
    return result;

    //uses the formula for getting the sum all(algebra)
    //return (max+min) * ((max - (min-1))/2)
};

// Do not edit below this line
module.exports = sumAll;
