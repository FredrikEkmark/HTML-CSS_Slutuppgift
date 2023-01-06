// Elements to modyfi html

const sendMessageEl = document.getElementById("sendMessage");
const formEl = document.getElementById("formcontent")
const messagesentblockEl = document.getElementById("messagesentblock")

// Select Element //

var select = document.getElementById("messagetype");

// Buttons //

const responsemessageEl = document.getElementById("responsemessage");
const resetformbuttonEl = document.getElementById("resetformbutton")

const menubutton3El = document.getElementById("menubutton3");
const menubutton2El = document.getElementById("menubutton2");
const menubutton1El = document.getElementById("menubutton1");

// Elements to add classes too //

const menuhomeEl = document.getElementById("menuhome");
const menusuitesEl = document.getElementById("menusuites");
const menucontactEl = document.getElementById("menucontact");
const herotextEl = document.getElementById("herotext");

// Functions

function messageSent() {

    responsemessageEl.innerHTML = "Message sent";
    formEl.style.display = "none";
    messagesentblockEl.style.display = "block";
    
}

function resetform() {

    responsemessageEl.innerHTML = "";
    messagesentblockEl.style.display = "none";
    formEl.style.display = "block";

}

function openrolldownmenu1() {

    menuhomeEl.classList.toggle("menurolldown");
    herotextEl.classList.toggle("hide")
}

function openrolldownmenu2() {
    
    menusuitesEl.classList.toggle("menurolldown");
}

function openrolldownmenu3() {

    menucontactEl.classList.toggle("menurolldown");
}

function selectmessagetype() {

    if (select != null) {
        var value = select.options[select.selectedIndex].value;
    
        if (value == "1") {
            document.getElementById("personalinfo").style.display = "block";
            document.getElementById("newbooking").style.display = "block";
            document.getElementById("bookingref").style.display = "none";
      
        } else if (value == "2") {
            document.getElementById("personalinfo").style.display = "none";
            document.getElementById("newbooking").style.display = "none";
            document.getElementById("bookingref").style.display = "block";
      
        } else if (value == "3") {
            document.getElementById("personalinfo").style.display = "block";
            document.getElementById("newbooking").style.display = "none";
            document.getElementById("bookingref").style.display = "none";
        }
    }
}

selectmessagetype()


// EventListeners //
if (menubutton1El != null) {
menubutton1El.addEventListener('click', openrolldownmenu1);
}

if (menubutton2El != null) {
menubutton2El.addEventListener('click', openrolldownmenu2);
}

if (menubutton3El != null) {
menubutton3El.addEventListener('click', openrolldownmenu3);
}

if (sendMessageEl != null) {
sendMessageEl.addEventListener('click', messageSent);
}

if (resetformbuttonEl != null) {

    resetformbuttonEl.addEventListener('click', resetform)
}



