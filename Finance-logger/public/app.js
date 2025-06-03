"use strict";
// // interacting wiht the dom
// const anchor = document.querySelector('a')!
// // “I am sure that document.querySelector('a') will not return null, so trust me, don’t give me a compile-time error.”
// console.log(anchor.href)
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
