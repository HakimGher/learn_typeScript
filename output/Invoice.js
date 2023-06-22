export class Invoice {
    constructor(tofrom, details, amount) {
        this.tofrom = tofrom;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log(this.tofrom, this.details, this.amount);
    }
}
