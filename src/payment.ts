import { HasFormatter } from "./HasFormatter";

export class Payment implements HasFormatter{

    constructor(readonly recipient : String, 
                private details : String, 
                public amount : number){

    }
    format(){
        console.log(this.recipient,
            this.details, 
            this.amount);
    }
}