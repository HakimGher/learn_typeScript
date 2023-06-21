"use strict"
// get the form from html 
    let form =document.querySelector(".new-item-form") as HTMLFormElement;

// inputs 
let type = document.querySelector("#type") as HTMLSelectElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount =document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    console.log("to from => "+tofrom.value +" details "+details.value+ " the amount =>");

})

