let userName: string = 'Jack';
let hasLoggedIn: boolean = true;

userName += "Herrignton";

console.log(hasLoggedIn)

let myNumber: number = 10;

let myRegex:RegExp = /foo/;

// Arrays
const names:string[] = userName.split(" ")

// generic
const myValues: Array<number> = [2, 4.4,5];

// objects

interface Person {
    first: string;
    last: string
}
const myPerson: Person = {
    first: "Noel",
    last: "Odero"
}

// objects as maps
// { [key: number]: string }.
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = 'c'


// conditionals and expressions
if(ids[30] === 'D') {
    
}

for(let i = 0; i< 10; i++) {
    console.log(i);
}

[1,2,3,4].forEach((y) => console.log(y))

const out = [2,4,5,5].map((v) =>`${v + 10}`)