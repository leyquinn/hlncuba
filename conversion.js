function convertCelsiusToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById('celsiusInput').value);

    if (!isNaN(celsiusInput)) {
        const result = (celsiusInput * 9/5) + 32;
        document.getElementById('resultCelsiusToFahrenheit').innerText = `Result: ${result.toFixed(2)} °F`;
    } else {
        document.getElementById('resultCelsiusToFahrenheit').innerText = 'Please enter a valid number.';
    }
}

function convertFahrenheitToCelsius() {
    const fahrenheitInput = parseFloat(document.getElementById('fahrenheitInput').value);

    if (!isNaN(fahrenheitInput)) {
        const result = (fahrenheitInput - 32) * 5/9;
        document.getElementById('resultFahrenheitToCelsius').innerText = `Result: ${result.toFixed(2)} °C`;
    } else {
        document.getElementById('resultFahrenheitToCelsius').innerText = 'Please enter a valid number.';
    }
}

function convertMetersToFeet() {
    const metersInput = parseFloat(document.getElementById('metersInput').value);

    if (!isNaN(metersInput)) {
        const result = metersInput * 3.28084;
        document.getElementById('resultMetersToFeet').innerText = `Result: ${result.toFixed(2)} feet`;
    } else {
        document.getElementById('resultMetersToFeet').innerText = 'Please enter a valid number.';
    }
}

function convertFeetToMeters() {
    const feetInput = parseFloat(document.getElementById('feetInput').value);

    if (!isNaN(feetInput)) {
        const result = feetInput / 3.28084;
        document.getElementById('resultFeetToMeters').innerText = `Result: ${result.toFixed(2)} meters`;
    } else {
        document.getElementById('resultFeetToMeters').innerText = 'Please enter a valid number.';
    }
}


