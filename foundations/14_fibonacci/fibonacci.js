const fibonacci = function(num) {
  let fibonacciArray = [];
  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS"
  } else {
    let num1 = 1;
    let num2 = 1;
    totalSum = 0;
    for (let i = 0; i < num; i++) {
      fibonacciArray.push(num1)
      totalSum = num1 + num2;
      num1 = num2;
      num2 = totalSum;
    }
  }
  return fibonacciArray[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
