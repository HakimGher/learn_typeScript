// Classes 
import { Invoice } from "./Invoice";
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
