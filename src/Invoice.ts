import { HasFormatter } from "./HasFormatter.js";

export class Invoice implements HasFormatter{

    constructor(readonly tofrom : String, 
                private details : String ,
                public amount : number){
    
    }
    format(){
        console.log(this.tofrom,
            this.details,
            this.amount);    
    }
}

