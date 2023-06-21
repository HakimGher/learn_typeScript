"use strict";
let ages = 22;
let nom = "hakim";
console.log("my age is " + ages + "my name is " + nom);
console.log("hello world");
let home = 22;
console.log(home);
// function parametre type :
const compter = (diamiter) => {
    return diamiter * 20;
};
console.log(compter(30));
// Arrays 
let strTab = ["mario", "luis", "fine"];
strTab.push("hope");
// hakim[0]= 230; !!!  cause the array is declared with strings
let mixedTab = ["hakim", "ghernaout", 22];
mixedTab.push(230);
mixedTab[1] = 10;
// in the example above there no error cause the mixedTab is declared with both string and numbers
// Objects 
let obj = {
    name: "mario",
    familyName: "GHERNAOUT",
    age: 22,
};
obj.name = "mayo";
obj.age = 230;
// obg.age = "hakim"; !!! age is declared as number and cannot be replaced by string 
// obj = {
//     name :"hakim",
//     familyName:"gherwiti",
// } !!! cause the property "age" is missed here , and the object always takes the first declared propoerties 
// Explicit Types  =>
let caracter;
caracter = "hakim";
// caracter= 22; !!! cause the type of this variable is initialized to string  
let number;
number = 22;
// number = "azulFellawen" !!! cause the type of this variable is initialized as Number 
let bool;
// bool  = 22; //
// bool = "booleen" !!! cause the type of this variable is initialized as Boolean 
bool = true;
// <=
// arrays =>
// let ninja : String[];
// ninja.push["hakim"]; !!! cause the ninja is not initalized with an empty array 
let ninja = [];
ninja.push("names");
// <=
//Union types 
// =>
// 1- Arrays 
let MixedArray = [];
MixedArray.push("hakim");
MixedArray.push(22);
// MixedArray.push(true); cause its not a string or a number
// 2- variables 
let UnionTypes = true;
UnionTypes = 123;
UnionTypes = "unionTypes";
// 3- Objects 
let Uobj;
Uobj = {
    name: "hakim",
    age: "22",
};
let Uobj1 = {
    name: String,
    age: number,
};
Uobj1 = {
    name: "hakim",
    age: 22,
};
// <=
// Any Type
// =>
let age = "hakim";
age = true;
age = 223;
// any type array 
let array = [];
array.push("hakim");
array.push(123);
let ninjaO;
ninjaO = {
    name: "hakim",
    familyName: "ghernaout",
    age: 213,
};
ninjaO = {
    name: 123,
    familyName: "ghernaout",
    age: 213,
};
// <=
// Functions 
// =>
let dateOfBirth = (age) => {
    return 2023 - age;
};
console.log(dateOfBirth(22));
// parametres 
let bio = (nom, prenom, age) => {
    return " ton nom est " + nom + "ton prenom est " + prenom + "ton age est " + age;
};
console.log(bio("hakim", "ghernaout")); // we called the bio function with only 2 parameters
// we can also set a default value to the a parameter 
let bio1 = (nom, prenom, age = 20) => {
    console.log(age);
};
let funct1 = (a) => {
};
