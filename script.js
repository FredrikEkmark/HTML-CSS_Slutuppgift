

const sendMessageEl = document.getElementById("sendMessage");

const formEl = document.getElementById("form");

function messageSent() {
    formEl.innerHTML = "test";
};

sendMessageEl.addEventListener('click', messageSent());
;