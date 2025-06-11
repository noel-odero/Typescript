"use strict";
// function overloading
function parseCoordinateFromobject(obj) {
    return Object.assign({}, obj);
}
function parseCoordinateFromNumbers(x, y) {
    return {
        x,
        y,
    };
}
function parseCoordinate(arg1, arg2) {
    let coord = {
        x: 0,
        y: 0,
    };
    if (typeof arg1 === "string") {
        arg1.split(',').forEach(str => {
            const [key, value] = str.split(':');
            coord[key] = parseInt(value, 10);
        });
    }
    else if (typeof arg1 === "object") {
        coord = Object.assign({}, arg1);
    }
    else {
        coord = {
            x: arg1,
            y: arg2
        };
    }
    return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 54, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));
