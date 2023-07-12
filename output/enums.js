"use strict";
// ENUMS 
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["DIRECTION"] = 2] = "DIRECTION";
    resourceType[resourceType["FILM"] = 3] = "FILM";
})(resourceType || (resourceType = {}));
let docOne = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: "me",
};
let docTwo = {
    uid: 2,
    resourceType: resourceType.AUTHOR,
    data: 222,
};
