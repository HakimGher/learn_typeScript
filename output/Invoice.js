// import { HasFormatter } from "./HasFormatter";
// export class Invoice implements HasFormatter{
//     constructor(readonly tofrom : String, 
//                 private details : String ,
//                 public amount : number){
//     }
//     format(){
//         console.log(this.tofrom,
//             this.details,
//             this.amount);    
//     }
// }
export class Invoice {
    constructor(tofrom, details, amount) {
        this.tofrom = tofrom;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return (this.details, this.tofrom);
    }
}
