let number = document.querySelector('#phoneNumber'),
    message = document.querySelector('#message'),
    btn = document.querySelector('#sendButton');

function sendWhatsapp(num, ms) {
    let urlApi =` http://api.textmebot.com/send.php?recipient=+252${num}&apikey=Srxe1qspFfmL&text=${ms}`;
    console.log(urlApi);
    fetch(urlApi)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // Handle response data here
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

btn.addEventListener('click', () => {
    sendWhatsapp(number.value, message.value);
});