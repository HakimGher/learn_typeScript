// import { HasFormatter } from "./HasFormatter";

import { HasFormatter } from "./HasFormatter";

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

export class Invoice implements HasFormatter {
    constructor (readonly tofrom :string ,
        private details : string ,
        public amount :number ){

        }
        format(): string {
            return (
                this.details,this.tofrom);
        }
    }