const findTheOldest = function(arr) {
  let sortedArray = arr.sort((obj1, obj2) => {
    const age1 = (obj1["yearOfDeath"] == undefined) ? new Date().getFullYear() - obj1["yearOfBirth"] : obj1["yearOfDeath"] - obj1["yearOfBirth"];
    const age2 = (obj2["yearOfDeath"] == undefined) ? new Date().getFullYear() - obj2["yearOfBirth"] : obj2["yearOfDeath"] - obj2["yearOfBirth"];

    if (age1 > age2) return 1;
    if (age1 == age2) return 0;
    if (age1 < age2) return -1;
  });
  return sortedArray.at(-1); 

};

// Do not edit below this line
module.exports = findTheOldest;
