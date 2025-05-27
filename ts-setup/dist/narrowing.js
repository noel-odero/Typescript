"use strict";
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
