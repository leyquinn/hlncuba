function calculate() {
    const nValue = parseInt(document.getElementById('nValue').value);

    if (!isNaN(nValue) && nValue > 0) {
        let factorial = 1;
        let sum = 0;

        let i = 1;
        while (i <= nValue) {
            factorial *= i;
            i++;
        }
        
        let j = 1;
        let doWhileSum = 0;
        do {
            doWhileSum += j;
            j++;
        } while (j <= nValue);

        let forSum = 0;
        for (let k = 1; k <= nValue; k++) {
            forSum += k;
        }
        const forAverage = forSum / nValue;
        
        document.getElementById('result').innerHTML = `
            Factorial of ${nValue}: ${factorial}<br>
            Sum of first ${nValue} natural numbers (Do While Loop): ${doWhileSum}<br>
            Average of first ${nValue} natural numbers (For Loop): ${forAverage.toFixed(2)}
        `;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid and positive integer for N.';
    }
}
