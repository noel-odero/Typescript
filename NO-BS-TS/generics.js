"use strict";
// generic function
function simpleState(initial) {
    let val = initial;
    return [
        () => val,
        (v) => {
            val = v;
        }
    ];
}
const [st1getter, st1setter] = simpleState(1);
console.log(st1getter());
st1setter(26);
console.log(st1getter());
const [st2getter, st2setter] = simpleState(null);
console.log(st2getter());
st2setter("null");
console.log(st2getter());
