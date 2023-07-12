"use strict"
// import export 
import { Invoice } from "./Invoice.js"; 
import { Payment } from "./payment.js";
import {HasFormatter} from "./HasFormatter.js"
import { listTemplate } from "./listTemplate.js";
import * as generics from "./generics.js";

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
    let doc : HasFormatter;

    e.preventDefault();
    if(type.value === "invoice"){
            doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    
    list.render(doc,type.value,"start");
}
    
 )


//  )
// // Classes 
// // =>
    
//     let hakim = new Invoice("hakim","ghernaout",18);
//     hakim.format();
//     let luis = new Invoice("luis","viewtemps",20);
//     luis.format();

//     // only object instanciated from Invoice class can be added to the invoices array 
//     let invoices :Invoice[] = [];

//     // we can change the value of class properties 


//     invoices.push(luis);
//     invoices.push(hakim);

//     // access the invoices array  
//     invoices.forEach(env=>{
//         console.log(env.tofrom,env.amount);
//     })
//     // all classes properties are public by default let's set all the propeties
//     // private
//     class prInvoice {


//     constructor(private prNamae : String,private PrFname : String
//              ,private Prage : number,readonly ReadOnly : String){
     
//     }
//     format(){
//     console.log(
//         this.prNamae ,
//         this.PrFname,
//         this.Prage,);    }
//     }

//     let prhakim = new prInvoice("hakim","ghernaout",28,"readonly    ");
//     prhakim.format();
// // <=
// // Interfaces 
// // => interfaces classes    

//     interface isPerson {
//         name:String,
//         fname : String,
//         age :number ;
//         talk(a:String): void;
//         SayAge(numb:number):number;

//     }

//     let mohammed : isPerson = {
//         name : "Mohammed",
//         fname :"ghernaout",
//         age : 60,
//         talk (text : String){
//             console.log("my name is "+ name);

//         },
//         SayAge(age : number ){
//             return age ;
//         }


//     }

//     const greetPerson = (person :isPerson)=>{
//         console.log(person);
//     };

//     greetPerson(mohammed);


//     let docOne : HasFormatter;
//     let docTwo : HasFormatter;

//     docOne  = new Invoice("maio","gher",23);
//     docTwo  = new Invoice("maio","gher",23);

//     let docz : HasFormatter[]=[];
//     docz.push(docOne);
//     docz.push(docTwo);
//     console.log(docz);
    


//     let partOne : HasFormatter;
//     let partTwo : HasFormatter;




