// string, number, boolean = primitives
// type annotation is not mandatory when using typescript, but when reassignig, you have to reassign the same type

const count: number = 10;
const myName: string = 'Noel';
const isStudent: boolean = false;


// non-primitives
// You have to specify what the type element of that array is gonna be.
// Arrays in typescript are a collection of same type value

// single type array
// type annotation is not mandatory when using typescript, but when reassigning, you have to reassign the same type

let students: string[] = ['a', 'b', 'c'];

// generic array type <>

let ages: Array<number> = [1,2,3,4];

// union operator is used to combine multiple types : multitype array
let position: (string | number)[]= ['a', 1]


// multi dimensional array

const multiDimen: string[][] = [[],[]]

// tuples
// you can define the data type in each pos

let ages1: [string, number] = ['a', 2]

// any
// once the type of value is any, you can pass any

let obj: any = {rad: 0};

obj.getRad();
obj.dim = '23';

const age2: any = "Stone Age";

// type annotation : you don't have to explicitly define the return type of a function, but you can if you want to
// That automatic inference is called type inference and is also true for anonymous functions.
function greetMe(name: string){
    return `Hello ${name}`;
}

greetMe('Noel');

const candies: string[] = ['chocolate', 'lollipop', 'gummy bear'];

candies.forEach(function(c) {
    console.log(c.toUpperCase());
})
// arrays can have multitypes


// a function taking an obj as an argument
function printColor(color: {name: string, code: string, index: number}) {
    console.log(`This is ${color.name} with ${color.index}`)

}

printColor({name: "white", code: "#fff", index: 1})


// optional properties - ? - these are properties that may or may not be present in the object

function printColor2(color: {name: string, code: string, index?: number}) {
    console.log(`This is ${color.name} with ${color.index ? color.index : 'no index'}`)
}


// Union
// narrowing in typescript is the process of checking the type of a variable at runtime and then using that information to narrow down the type of the variable. 

function getPosition(position: number | string) {
    if(typeof position === 'string') {
        console.log(position.split(' '))
    } else {
        console.log(position)
    }
}

getPosition(12)
getPosition('twelve and 2')

// Type assertion
// Somwtimes you want to cast your variables from one type to another, the moment you use any you want to assert type to something you are more comfortable with

// There are two ways : using keyword called as or <>

const nickName: any = "Brad";
const uppercasedNN = (nickName as string).toUpperCase();
const uppercasedNN1 = (<string> nickName).toUpperCase();


// null or undefined

const testStr: string = 'hello';

const greetings = [
    {name: "Oye"},
    {name: "Hello"},
    {name: "Hola"}
];

const found = greetings.find((greeting) => greeting.name === testStr)
console.log(found && found.name)

// Non-null assertion operator - !
// gives you a false confidence to tell ts this guy can never be null or undefined
