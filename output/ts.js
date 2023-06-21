"use strict";
// get the form from html 
let form = document.querySelector(".new-item-form");
// inputs 
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("to from => " + tofrom.value + " details " + details.value + " the amount =>");
});
