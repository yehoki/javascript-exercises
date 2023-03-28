const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  }
  return array.reduce((total, digit) => {
    return total + digit;
  })
};

const multiply = function(array) {
  if (array.length === 0){
    return 0;
  }
  return array.reduce((total, digit) => {
    return total * digit;
  })
};

const power = function(digit, exponent) {
  if (exponent === 0){
    return 1;
  } else if (exponent === 1){
    return digit;
  } else {
    return digit * power(digit, exponent - 1);
  }
};

const factorial = function(number) {
  if (number === 0){
    return 1;
  }
  else if (number === 1){
    return 1;
  }
  else {
    return number * factorial(number - 1);
  }
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
