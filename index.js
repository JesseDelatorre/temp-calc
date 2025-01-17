// create function called convertToCelsius which takes input and returns in celcius
// make prompt for input F-temp
//convert C-temp using equation
//set temp description to equate F-temp
//make temp description the same as weather description
//create rules for <32
//rules for <64
// rules for <86
//rules for <100
//rules for >= 100
//create alert that shows final message


const temperatureConverter=() => {
  const fahrenheitTemp = prompt(`Input a Fahrenheit temperature`);
  celsiusTemp = (Number(fahrenheitTemp) - 32) * (5/9);
  const temperatureDescription = (fahrenheitTemp);
 let weatherDescription = (temperatureDescription);
 
 if (fahrenheitTemp < 32) {
   weatherDescription = ('Very Cold!!');
 } else if (fahrenheitTemp <64) {
  weatherDescription = ('Cold!!');
  } else if (fahrenheitTemp < 86) {
  weatherDescription = ('Warm');
 } else if (fahrenheitTemp <100) {
  weatherDescription = ('Hot!');
 } else if (fahrenheitTemp >= 100) {
  weatherDescription = ('Very Hot!!');
 }
 alert(`'Fahrenheit Temperature You Enter Is:' ${Number(fahrenheitTemp)} \n'Convert to Celsius Temperature is:' ${Number(Math.round(celsiusTemp))} \n'The Weather is ${weatherDescription}'`);
 }
 temperatureConverter();
 
