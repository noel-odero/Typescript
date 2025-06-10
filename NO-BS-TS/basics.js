"use strict";
let userName = 'Jack';
let hasLoggedIn = true;
userName += "Herrignton";
console.log(hasLoggedIn);
let myNumber = 10;
let myRegex = /foo/;
// Arrays
const names = userName.split(" ");
// generic
const myValues = [2, 4.4, 5];
const myPerson = {
    first: "Noel",
    last: "Odero"
};
// objects as maps
// { [key: number]: string }.
const ids = {
    10: "a",
    20: "b"
};
ids[30] = 'c';
// conditionals and expressions
if (ids[30] === 'D') {
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
[1, 2, 3, 4].forEach((y) => console.log(y));
const out = [2, 4, 5, 5].map((v) => `${v + 10}`);
