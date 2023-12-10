function calculateIncomeTax() {
    const taxableIncome = parseFloat(document.getElementById('taxableIncome').value);

    if (!isNaN(taxableIncome)) {
        let incomeTax = 0;

        if (taxableIncome > 8000000) {
            incomeTax = 2410000 + 0.35 * (taxableIncome - 8000000);
        } else if (taxableIncome > 2000000) {
            incomeTax = 490000 + 0.32 * (taxableIncome - 2000000);
        } else if (taxableIncome > 800000) {
            incomeTax = 130000 + 0.30 * (taxableIncome - 800000);
        } else if (taxableIncome > 400000) {
            incomeTax = 30000 + 0.25 * (taxableIncome - 400000);
        } else if (taxableIncome > 250000) {
            incomeTax = 0.20 * (taxableIncome - 250000);
        }

        document.getElementById('result').innerText = `Income Tax: ₱${incomeTax.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number for taxable income.';
    }
}

