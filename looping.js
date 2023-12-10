function calculate() {
    const nValue = parseInt(document.getElementById('nValue').value);

    if (!isNaN(nValue) && nValue > 0) {
        let factorial = 1;
        let sum = 0;

        for (let i = 1; i <= nValue; i++) {
            factorial *= i;
            sum += i;
        }

        const average = sum / nValue;

        document.getElementById('result').innerHTML = `
            Factorial of ${nValue}: ${factorial}<br>
            Sum of first ${nValue} natural numbers: ${sum}<br>
            Average of first ${nValue} natural numbers: ${average.toFixed(2)}
        `;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid and positive integer for N.';
    }
}

