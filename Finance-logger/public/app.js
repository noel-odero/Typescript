import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/payments.js";
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice("yoshi", 'web work', 345);
// docTwo = new Payments('mario', 'plumbing', 345)
// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo)
// console.log(docs)
// const invOne = new Invoice("mario", "work on the mario website", 250)
// const invTwo = new Invoice("luigi", "work on the luigi website", 350)
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
// // interacting with the dom
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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
