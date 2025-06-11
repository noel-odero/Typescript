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
