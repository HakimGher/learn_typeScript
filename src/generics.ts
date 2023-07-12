
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

    interface Resource <T> {
        uid : number ,
        resourceName : string,
        data : T,
    }

    let docTwo : Resource <number> = {
        uid :123,
        resourceName : "docTwo",
        data : 1024,
    }

    let docThree : Resource <string[]> = 
    {
        uid : 124,
        resourceName :"docThree",
        data : ["one","two","three","four"],
    }

    // The spread operator return all elements of an array 
    const spread  = ()=>{
        let myArr = [1, 2, 3];
        return [1, 2, 3];
        //is the same as:
        return [...myArr];
    }
