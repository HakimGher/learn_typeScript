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


// Classes 
    class Invoice {
        name : String;
        prenom : String;
        age : number;

    constructor(name : String, prenom : String , age : number){
        this.name =  name;
        this.prenom = prenom;
        this.age = age;
    }
    format(){
    console.log(this.prenom);    }
    }

    let hakim = new Invoice("hakim","ghernaout",18);
    hakim.format();
    let luis = new Invoice("luis","viewtemps",20);
    luis.format();
    console.log(hakim,luis);
