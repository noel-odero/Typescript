// in operator for narrowing types
// // The `in` operator is used to check if a property exists in an object.

type Student = {study: () => {}}
type Employee1 = {work: () => {}}

function activity(actor: Student | Employee1) {
    if('study' in actor) {
        return actor.study();
    } else {
        return actor.work();
    }
}
