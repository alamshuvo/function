// Write a function to convert temperature from Celsius to Fahrenheit.

// ---
function convertTemperatureFromCelsiusToFahrenheit(temp) {
    let convert=temp*(9/5)+32;
    return `Hey you put ${temp} deg celsius we convert it ${convert} deg fahrenheit`;
}
console.log(convertTemperatureFromCelsiusToFahrenheit(34));