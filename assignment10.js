function convertFahrenheitToCelsius(f) {
	// calculate and return temperature in Celsius
   let c= (f-32) * 5/9;
   return c;
}

function convertCelsiusToFahrenheit(c) {
	// return temperature in Fahrenheit
   let f = c * 9/5 +32;
    return f;
}

console.log(convertFahrenheitToCelsius(50));

console.log(convertCelsiusToFahrenheit(37));

