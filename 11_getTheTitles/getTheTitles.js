const getTheTitles = function (arr) {
  return arr.reduce(function (accumulator, book) {
    accumulator.push(book.title);
    return accumulator;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
