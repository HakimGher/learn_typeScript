// ENUMS 
 

enum resourceType  {BOOK, AUTHOR, DIRECTION , FILM }

interface resource <T> {
    uid : number,
    resourceType :resourceType , 
    data : T,
}


let docOne: resource <string> = {
uid : 1,
resourceType : resourceType.BOOK,
data :"me",
}

let docTwo :resource <number> = {
    uid :2 ,
    resourceType : resourceType.AUTHOR,
    data: 222,
}
console.log(docOne,docTwo);