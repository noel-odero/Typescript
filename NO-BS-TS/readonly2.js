"use strict";
class Dogyy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const lgg = new Dogyy("LG", 13);
// lgg.name = "Foo";
console.log(lgg.name);
class DogList {
    constructor() {
        this.doggies = [];
    }
    static addDog(dog) {
        DogList.instance.doggies.push(dog);
    }
    getDogs() {
        return this.doggies;
    }
}
DogList.instance = new DogList();
DogList.addDog(lgg);
console.log(DogList.instance.getDogs());
