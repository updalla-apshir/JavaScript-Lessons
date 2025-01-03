// Function to fetch and populate currency dropdown menus
async function fetchCurrencies() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const currencies = Object.keys(data.rates);
    const selectFrom = document.getElementById('from');
    const selectTo = document.getElementById('to');

    currencies.forEach(currency => {
        selectFrom.innerHTML += `<option value="${currency}">${currency}</option>`;
        selectTo.innerHTML += `<option value="${currency}">${currency}</option>`;
    });
}

// Function to convert currency based on selected currencies and amount
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    console.log(data);
    const rate = data.rates[toCurrency];
    console.log(rate);
    if (!rate) {
        document.getElementById('result').textContent = 'Unable to fetch exchange rate data';
        return;
    }
    if(amount == ''){
        alert("fill the fielld")
        return;
    }

    const convertedAmount = amount * rate;
    document.getElementById('result').textContent = ` ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

window.onload = function() {
    fetchCurrencies();
}