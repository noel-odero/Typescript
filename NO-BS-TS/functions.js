"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
exports.getName = getName;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
const addStrings = (str1, str2) => `${str1} ${str2}`;
exports.addStrings = addStrings;
// union types
const format = (title, param) => `${title} ${param}`;
exports.format = format;
// void
const printFormat = (title, param) => {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// promise functions
const fetchData = (url) => Promise.resolve(`Data from ${url}`);
exports.fetchData = fetchData;
// Rest parameters
function introduce(saltutation, ...names) {
    return `${saltutation} ${names.join(" ")}`;
}
// Typescript only enforced types at compile time, not runtime
function getName(user) {
    return `${user.first} ${user.last}`;
}
