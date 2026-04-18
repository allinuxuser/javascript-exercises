const palindromes = function (string) {
  let filteredString = string.toLowerCase().replace(/[.,\/\s#!$%\^&\*;:{}=\-_`~()]/g,"");
  let reversedString = filteredString.split("").reverse().join("");
  if (reversedString == filteredString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
