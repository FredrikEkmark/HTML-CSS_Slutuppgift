

const sendMessage = document.getElementById("sendMessage");

const form = document.getElementById("form");

function messageSent() {

    form.innerHTML = "Message sent";
}

sendMessage.addEventListener('click', messageSent());