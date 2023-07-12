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
