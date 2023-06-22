"use strict";
// import export 
import { Invoice } from "./Invoice.js";
import { Payment } from "./payment.js";
// get the form from html 
let form = document.querySelector(".new-item-form");
// inputs 
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// Classes 
// =>
let hakim = new Invoice("hakim", "ghernaout", 18);
hakim.format();
let luis = new Invoice("luis", "viewtemps", 20);
luis.format();
// only object instanciated from Invoice class can be added to the invoices array 
let invoices = [];
// we can change the value of class properties 
invoices.push(luis);
invoices.push(hakim);
// access the invoices array  
invoices.forEach(env => {
    console.log(env.tofrom, env.amount);
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
let mohammed = {
    name: "Mohammed",
    fname: "ghernaout",
    age: 60,
    talk(text) {
        console.log("my name is " + name);
    },
    SayAge(age) {
        return age;
    }
};
const greetPerson = (person) => {
    console.log(person);
};
greetPerson(mohammed);
let docOne;
let docTwo;
docOne = new Invoice("maio", "gher", 23);
docTwo = new Invoice("maio", "gher", 23);
let docz = [];
docz.push(docOne);
docz.push(docTwo);
console.log(docz);
