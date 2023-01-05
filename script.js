

const sendMessageEl = document.getElementById("sendMessage");

const formEl = document.getElementById("form");



const menubutton3El = document.getElementById("menubutton3");
const menubutton2El = document.getElementById("menubutton2");
const menubutton1El = document.getElementById("menubutton1");



const menuhomeEl = document.getElementById("menuhome");
const menusuitesEl = document.getElementById("menusuites");
const menucontactEl = document.getElementById("menucontact");
const herotextEl = document.getElementById("herotext")

if (menubutton1El != null) {
menubutton1El.addEventListener('click', function openrolldownmenu3() {

    menuhomeEl.classList.toggle("menurolldown");
    herotextEl.classList.toggle("hide")
});
}

if (menubutton2El != null) {
    menubutton2El.addEventListener('click', function openrolldownmenu3() {
    
        menusuitesEl.classList.toggle("menurolldown");
    });
    }

if (menubutton3El != null) {
menubutton3El.addEventListener('click', function openrolldownmenu3() {

    menucontactEl.classList.toggle("menurolldown");
});
}

if (sendMessageEl != null) {
sendMessageEl.addEventListener('click', function messageSent() {
    formEl.innerHTML = "Message sent";
});
}

