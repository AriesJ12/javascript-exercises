const palindromes = function (word) {
    const arrWord = word.split("");
    const reverse = arrWord.reverse().join("");

    let result;
    if(!word.localeCompare(reverse,'en', { sensitivity: 'base', ignorePunctuation: true }))
    {
        result = true;
    }
    else
    {
        result = false;
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
