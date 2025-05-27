// in typescript we have various types like nunber, string, boolean, object, array, tuple, enum, any, void, never, unknown
// at times you have to support certain shape of data, like an object with certain properties
// if you have to create shape of data, you can use type aliases ehich is a way to give a name to a type.

type magicNumber = number;

const tShirts: magicNumber = 20;

type Employee = {
    id: number,
    name: string,
    email: string,
    salary: number,
    address?: string
}

const Adam: Employee = {
    id: 234,
    name: "adam",
    email: "adam@gmail.com",
    salary: 200,
     
}

console.log(Adam)

// nested type aliases - you have an entity within another
type Department = {
    name: string,
    employees: Employee[],
}
const sales: Department = {
    name: 'sales',
    employees: [
        {
            id: 234,
            name: "adam",
            email: "adam@gmail.com",
            salary: 200,
        },
        {
            id: 234,
            name: "adam",
            email: "adam@gmail.com",
            salary: 200,
        }
    ]
}

// composition - composite types alias names
// You can compose two types using union operator to create one type

type ISBN = number | string;

const bookIsnb1: ISBN = 1232345;
const bookIsnb2: ISBN = '1232345';


// intersection iperator - to extend types

type User = {
    id: number,
    name: string,
    email: string,
    password: string
}

type Admin = User & {
    role: "admin",
}

type customer = User & {
    role: "customer",
}

const admin: Admin = {
    id: 123,
    name: 'string',
    email: 'string',
    password: 'string',
    role: "admin"
}

const customer: customer = {
    id: 123,
    name: 'string',
    email: 'string',
    password: 'string',
    role: "customer"
}

// Template literal types

type startsWithTApaScript = `tapaScript${string}`;

const tsTY: startsWithTApaScript = 'tapaScript Youtube'


// function and type aliases

type calc = (a: number, b: number ) => number;

const sum: calc = (p, q) => p + q;
const mul: calc = (p, q) => p * q;

console.log(sum(2,3));
console.log(mul(2,3))

