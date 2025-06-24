"use strict";
// type myFlexibleDogInfo = {
//     name: string;
// } & Record <string, string>;
const dog = {
    name: "LG",
    breed: "Mutt",
    age: 2
};
function listenToObject(obj, listeners) {
    throw "Needs to be implemented";
}
const lg = {
    name: "LG",
    age: 13
};
listenToObject(lg, {
    onNameChange: (v) => { },
    onAgeChange: (v) => { },
    onAgeDelete: () => { }
});
