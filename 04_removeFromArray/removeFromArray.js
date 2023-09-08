const removeFromArray = function(array, ...remove) {
    return array.filter((element) => {return !remove.includes(element)});
};

// Do not edit below this line
module.exports = removeFromArray;
