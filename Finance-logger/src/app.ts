
import { Invoice } from "./classes/invoice.js"
import { ListTemplate } from "./classes/listTemplate.js";
import { Payments } from "./classes/payments.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";


const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);


const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: hasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, "end")
})




// generics
// allow us to create reusable code
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};

    
}
let docOne = addUID({name: 'yoshi', age: 40})
// let docTwo = addUID("hello")
console.log(docOne.age)


// with interfaces
interface Resource <T>{
    uid: number;
    resourceName: string;
    data: T;
}