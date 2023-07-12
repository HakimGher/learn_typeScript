import { Invoice } from './Invoice';
let mohammed = {
    name: "Mohammed",
    fname: "ghernaout",
    age: 60,
    talk(text) {
        console.log("my name is " + name);
    },
    SayAge(age) {
        return age;
    }
};
const greetPerson = (person) => {
    console.log(person);
};
greetPerson(mohammed);
let docOne;
let docTwo;
docOne = new Invoice("maio", "gher", 23);
docTwo = new Invoice("maio", "gher", 23);
let docz = [];
docz.push(docOne);
docz.push(docTwo);
console.log(docz);
let partOne;
let partTwo;
