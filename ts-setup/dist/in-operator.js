"use strict";
// in operator for narrowing types
// // The `in` operator is used to check if a property exists in an object.
function activity(actor) {
    if ('study' in actor) {
        return actor.study();
    }
    else {
        return actor.work();
    }
}
