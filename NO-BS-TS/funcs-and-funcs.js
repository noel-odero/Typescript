"use strict";
// function params
Object.defineProperty(exports, "__esModule", { value: true });
exports.printToFile = printToFile;
exports.arrayMutate = arrayMutate;
exports.createAdder = createAdder;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
console.log(arrayMutate([1, 3, 4], (v) => v * 10));
const myNewMutateFunv = (v) => v * 100;
console.log(myNewMutateFunv(45));
function createAdder(num) {
    return (val) => num + val;
}
const addOne = createAdder(1);
console.log(addOne(55));
