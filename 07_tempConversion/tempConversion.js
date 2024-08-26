const convertToCelsius = function(fahrenheit) {
  let celsiusTemp = (fahrenheit-32) * 5/9;
  celsiusTemp = celsiusTemp.toFixed(1);
  return parseFloat(celsiusTemp);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitTemp = (celsius * 9 /5 +32);
  fahrenheitTemp = fahrenheitTemp.toFixed(1);
  return parseFloat(fahrenheitTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
