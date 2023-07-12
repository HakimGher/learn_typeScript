"use strict"
// import export 
import { Invoice } from "./Invoice.js"; 
import { Payment } from "./payment.js";
import {HasFormatter} from "./HasFormatter.js"
import { listTemplate } from "./listTemplate.js";

// // get the form from html 
//     let form =document.querySelector(".new-item-form") as HTMLFormElement;

// // inputs 
// let type = document.querySelector("#type") as HTMLSelectElement;
// let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// let details = document.querySelector("#details") as HTMLInputElement;
// let amount = document.querySelector("#amount") as HTMLInputElement;

    
    
//     form.addEventListener('submit', (e:Event)=>{

//     e.preventDefault();
//     let doc : HasFormatter;
//     if (type.value  =="Invoice"){
//         doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
//     }
//     else {
//         doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
//     }
//     console.log(doc)});

let form = document.querySelector(".new-item-form") as HTMLFormElement;
const ul = document.querySelector("ul")!;


// input 
 let type = document.querySelector("#type") as HTMLSelectElement;
 let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
 let details = document.querySelector("#details") as HTMLInputElement;
 let amount = document.querySelector("#amount") as HTMLInputElement;
 
 const list = new listTemplate(ul);


 form.addEventListener('submit', (e:Event)=>{
    let values:[string,string,number] = [tofrom.value,details.value,amount.valueAsNumber];

    let doc : HasFormatter;
    e.preventDefault();
    if(type.value === "invoice"){
            doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    
    list.render(doc,type.value,"start");
}
    
 )





