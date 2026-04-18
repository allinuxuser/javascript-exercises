const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
	return array.reduce((sum, current) => sum = sum * current, 1)
};

const power = function(num1, num2) {
  return num1 ** num2	
};

const factorial = function(num) {
  let result = 1;
	while (num > 1) {
    result = result * num;
    num = num - 1;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
