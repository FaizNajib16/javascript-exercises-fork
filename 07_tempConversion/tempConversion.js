const convertToCelsius = function(temperature) {
  return Math.round((temperature - 32) * (5/9) * 10)/10;
};

const convertToFahrenheit = function(temperature) {
  return celsius = Math.round(((temperature * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*x °C ≘ (x × ⁠
9
/
5
⁠ + 32) °F*/

/*x °F ≘ (x − 32) × ⁠
5
/
9
⁠ °C*/