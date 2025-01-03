var message = document.querySelector('.messege');

message.className='messege-clicked';

document.querySelector('.result').addEventListener('click', function() {
    // Get input values
    var billAmount = document.getElementById('billAmount').value;
    var tipAmount = document.getElementById('tipAmount').value;
    var numberOfPeople = document.getElementById('Npeople').value;
    message.className='messege'

    // Ensure all inputs are provided
    if (!billAmount || !tipAmount || !numberOfPeople) {
        message.className='messege-clicked';
        alert('Please fill in all fields.');
        return;
   
    }


    // Convert inputs to numbers
    billAmount = +billAmount;
    tipAmount = +tipAmount;
    numberOfPeople = +numberOfPeople;

    // Check if inputs are valid numbers
    if (isNaN(billAmount) || isNaN(tipAmount) || isNaN(numberOfPeople)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Calculate tip amount
    var calculatedTip = (billAmount * tipAmount) / 100;

    // Calculate total bill amount
    var totalBillAmount = billAmount + calculatedTip;

    // Calculate amount per person
    var amountPerPerson = totalBillAmount / numberOfPeople;

    // Display results
    document.querySelector('#tipOutput').innerText = '$'  + calculatedTip;
  document.getElementById('totalBillOutput').innerText = '$' + totalBillAmount;
  document.getElementById('amountPerPersonOutput').innerText = '$' + amountPerPerson;
    
    message.className='messege'
});