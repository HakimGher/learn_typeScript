export class Invoice {
    name : String;
    prenom : String;
    age : number;

constructor(name : String, Fname : String , age : number){
    this.name =  name;
    this.prenom = Fname;
    this.age = age;
}
format(){
console.log(this.prenom);    }
}