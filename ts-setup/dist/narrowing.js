"use strict";
// Narrowing in TypeScript
// Narrowing is a way to refine the type of a variable within a conditional block.
// It allows you to check the type of a variable at runtime and then use that information to narrow down the type of the variable.
// Basically it is reducing the type of a variable from a broader type to a more specific type.
function getPosition(position) {
    if (typeof position === 'string') {
        console.log(position.split(' '));
    }
    else {
        console.log(position);
    }
}
getPosition("123 456");
getPosition(123456);
// There are several ways to narrow types in TypeScript:
// 1. Type Guards
// 2. Equality operators
// 3. Using the `in` operator
// 4. Using `instanceof`
// type predicates
// discriminated unions
