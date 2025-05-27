"use strict";
// in typescript we have various types like nunber, string, boolean, object, array, tuple, enum, any, void, never, unknown
// at times you have to support certain shape of data, like an object with certain properties
// if you have to create shape of data, you can use type aliases ehich is a way to give a name to a type.
const tShirts = 20;
const Adam = {
    id: 234,
    name: "adam",
    email: "adam@gmail.com",
    salary: 200,
};
console.log(Adam);
const sales = {
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
};
const bookIsnb1 = 1232345;
const bookIsnb2 = '1232345';
const admin = {
    id: 123,
    name: 'string',
    email: 'string',
    password: 'string',
    role: "admin"
};
const customer = {
    id: 123,
    name: 'string',
    email: 'string',
    password: 'string',
    role: "customer"
};
const tsTY = 'tapaScript Youtube';
const sum = (p, q) => p + q;
const mul = (p, q) => p * q;
console.log(sum(2, 3));
console.log(mul(2, 3));
