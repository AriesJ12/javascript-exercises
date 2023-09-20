const findTheOldest = function (arr) {
  return arr.reduce(function (result, person) {
    if (Object.keys(result).length === 0) {
      result = person;
      return result;
    }
    const currentYear = new Date().getFullYear();

    let currentAge = currentYear - result.yearOfBirth;
    let nextAge = currentYear - person.yearOfBirth;
    if (Object.hasOwn(result, "yearOfDeath")) {
      currentAge = result.yearOfDeath - result.yearOfBirth;
    }

    if (Object.hasOwn(person, "yearOfDeath")) {
      nextAge = person.yearOfDeath - person.yearOfBirth;
    }

    if (nextAge > currentAge) {
      result = person;
    }
    return result;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
