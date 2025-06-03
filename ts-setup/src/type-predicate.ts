// type predicate functions
// they return a boolean value and are used to narrow down the type of a variable.
// they have a particular syntax that is used to define the type of the variable that is being checked.

function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function doIt(value: any) {
    if(isNumber(value)) {
        console.log(value.toFixed(2));
    }

    return null;
}


type Animal = 'cat' | 'dog' | 'bird';
interface Pet {
    animal: Animal;
}

class Dog implements Pet {
    animal: "dog" = "dog";


    public bark(){
        console.log("vow wow")
    }
}

const doverMan: Pet = new Dog();
