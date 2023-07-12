
export const UIID = /*  Generic => */ <T extends {name:string}>(obj : T)=>{
    let uid = Math.floor(Math.random()*100);
return {...obj,uid}
}
 

    // call the function UIID 
    let docOne = UIID({name :"hakim",familyName :"Ghernaout"});
    console.log(docOne);
    // without generic we cant access the object properties 
    console.log(docOne.name);
    console.log(docOne.familyName);

