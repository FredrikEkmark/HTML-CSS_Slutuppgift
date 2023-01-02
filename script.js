

const sendMessageEl = document.getElementById("sendMessage");

const formEl = document.getElementById("form");

sendMessageEl.addEventListener('click', function messageSent() {
    formEl.innerHTML = "Message sent"
});
