"use strict";
// function params
Object.defineProperty(exports, "__esModule", { value: true });
exports.printToFile = printToFile;
exports.arrayMutate = arrayMutate;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
console.log(arrayMutate([1, 3, 4], function (v) { return v * 10; }));
