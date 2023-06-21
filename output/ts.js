"use strict";
// Dom select a link from index.html
let anchor = document.querySelector('a');
console.log(anchor);
// trying to set a DOM in the index page 
// form
let form = document.querySelector('.new-item-form');
// inputs
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
// event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
