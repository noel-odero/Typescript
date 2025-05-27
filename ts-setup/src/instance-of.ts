// instance of operator is used to check if an object is an instance of a class or a constructor function.
// It is a way to check the type of an object at runtime.
// It is used to check if an object is an instance of a class or a constructor function.


function checkThing(vlaue: string | Date) {
    if (vlaue instanceof Date) {
        console.log(vlaue.toDateString());
    } else {
        console.log(vlaue.toLowerCase());
    }
}

// if you don't position each of these typescript files as independent modules, all these things get added to a global module that's why the name conflict happens.

export class Student {
    private name: string;
    private age: number;
    private grade: number;

    constructor(name: string, age: number, grade: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getMarks(): number {
        return this.grade;
    }
}


function checkMArks(student: Student | string) {
    if (student instanceof Student) {
        console.log(`Student marks: ${student.getMarks()}`);
    } else {
        console.log(`Marks: ${student}`);
    }
}

const Akash = new Student("Akash", 20, 90);
checkMArks(Akash);
checkMArks("A+");