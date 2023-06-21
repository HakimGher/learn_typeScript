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
    constructor(name, Fname, age) {
        this.name = name;
        this.prenom = Fname;
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
// only object instanciated from Invoice class can be added to the invoices array 
let invoices = [];
// we can change the value of class properties 
luis.name = "hakim";
hakim.name = "luis";
invoices.push(luis);
invoices.push(hakim);
// access the invoices array  
invoices.forEach(env => {
    console.log(env.name, env.prenom, env.age);
});
// all classes properties are public by default let's set all the propeties
// private
class prInvoice {
    constructor(prNamae, PrFname, Prage, ReadOnly) {
        this.prNamae = prNamae;
        this.PrFname = PrFname;
        this.Prage = Prage;
        this.ReadOnly = ReadOnly;
    }
    format() {
        console.log(this.prNamae, this.PrFname, this.Prage);
    }
}
let prhakim = new prInvoice("hakim", "ghernaout", 28, "readonly    ");
prhakim.format();
