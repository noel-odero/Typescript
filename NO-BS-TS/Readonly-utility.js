"use strict";
function makeCat(name, breed) {
    return {
        name,
        breed
    };
}
const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter";
// tuples
function makeCoordinate(x, y, z) {
    return [x, y, z];
}
const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50
const reallyConst = [1, 3, 5];
// reallyConst.push(60)
