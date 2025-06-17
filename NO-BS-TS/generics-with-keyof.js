"use strict";
function pluck(items, key) {
    return items.map((item) => item[key]);
}
const dogs = [
    { name: "Mimi", age: 12 },
    { name: "Mim0", age: 10 },
];
console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));
function sendEvent(name, data) {
    console.log([name, data]);
}
sendEvent("addToCart", { productID: 'foo', user: "baz", quantity: 1, time: 1 });
sendEvent("checkout", { user: "baz", time: 1 });
