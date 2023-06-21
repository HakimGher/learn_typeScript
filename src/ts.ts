"use strict";
// Dom select a link from index.html
let anchor = document.querySelector('a');
console.log(anchor);
// trying to set a DOM in the index page 

// form
let form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
let type = document.querySelector("#type") as HTMLSelectElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

// event listener
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    console.log(type.value,
        tofrom.value,
        details.value,
        amount.value,);
})