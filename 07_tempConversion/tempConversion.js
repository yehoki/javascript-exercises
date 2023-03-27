const convertToCelsius = function(fahrenheitTemp) {
  return parseFloat(((fahrenheitTemp - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  return parseFloat((((celsiusTemp * 9)/ 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
