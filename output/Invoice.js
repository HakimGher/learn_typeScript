export class Invoice {
    constructor(name, Fname, age) {
        this.name = name;
        this.prenom = Fname;
        this.age = age;
    }
    format() {
        console.log(this.prenom);
    }
}
