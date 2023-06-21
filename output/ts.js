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
// Classes 
class Invoice {
    constructor(name, prenom, age) {
        this.name = name;
        this.prenom = prenom;
        this.age = age;
    }
    format() {
        console.log(this.prenom);
    }
}
let hakim = new Invoice("hakim", "ghernaout", 18);
hakim.format();
let luis = new Invoice("luis", "viewtemps", 20);
luis.format();
console.log(hakim, luis);
