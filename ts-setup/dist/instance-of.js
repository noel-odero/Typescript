"use strict";
// instance of operator is used to check if an object is an instance of a class or a constructor function.
// It is a way to check the type of an object at runtime.
// It is used to check if an object is an instance of a class or a constructor function.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
function checkThing(vlaue) {
    if (vlaue instanceof Date) {
        console.log(vlaue.toDateString());
    }
    else {
        console.log(vlaue.toLowerCase());
    }
}
// if you don't position each of these typescript files as independent modules, all these things get added to a global module that's why the name conflict happens.
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getMarks() {
        return this.grade;
    }
}
exports.Student = Student;
function checkMArks(student) {
    if (student instanceof Student) {
        console.log(`Student marks: ${student.getMarks()}`);
    }
    else {
        console.log(`Marks: ${student}`);
    }
}
const Akash = new Student("Akash", 20, 90);
checkMArks(Akash);
checkMArks("A+");
