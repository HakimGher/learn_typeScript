export const UIID = /*  Generic => */ (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// call the function UIID 
let docOne = UIID({ name: "hakim", familyName: "Ghernaout" });
console.log(docOne);
// without generic we cant access the object properties 
console.log(docOne.name);
console.log(docOne.familyName);
let docTwo = {
    uid: 123,
    resourceName: "docTwo",
    data: 1024,
};
let docThree = {
    uid: 124,
    resourceName: "docThree",
    data: ["one", "two", "three", "four"],
};
// The spread operator return all elements of an array 
const spread = () => {
    let myArr = [1, 2, 3];
    return [1, 2, 3];
    //is the same as:
    return [...myArr];
};
