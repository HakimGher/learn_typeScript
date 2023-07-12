// Interfaces 
// => interfaces classes    
import {HasFormatter} from './HasFormatter.js';
import { Invoice } from './Invoice';

    interface isPerson {
        name:String,
        fname : String,
        age :number ;
        talk(a:String): void;
        SayAge(numb:number):number;

    }

    let mohammed : isPerson = {
        name : "Mohammed",
        fname :"ghernaout",
        age : 60,
        talk (text : String){
            console.log("my name is "+ name);

        },
        SayAge(age : number ){
            return age ;
        }


    }

    const greetPerson = (person :isPerson)=>{
        console.log(person);
    };

    greetPerson(mohammed);


    let docOne : HasFormatter;
    let docTwo : HasFormatter;

    docOne  = new Invoice("maio","gher",23);
    docTwo  = new Invoice("maio","gher",23);

    let docz : HasFormatter[]=[];
    docz.push(docOne);
    docz.push(docTwo);
    console.log(docz);
    


    let partOne : HasFormatter;
    let partTwo : HasFormatter;

