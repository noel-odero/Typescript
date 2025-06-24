// 2. **Task:** Define an abstract class `Shape2D`:
//     - Abstract method `area(): number`;
    
//     Then implement:
    
//     - `Circle` subclass (property: `radius`);
//     - `Rectangle` subclass (properties: `width`, `height`);
    
//     Constructors should initialize properties, and `area()` should return correct values.


abstract class Shape2D{
    abstract area(): number
}

class Circle extends Shape2D {
    constructor(public radius: number){
        super()
    }

    area(): number {
        return Math.PI * this.radius * this.radius
    }
}
class Rectangle extends Shape2D{
    constructor(public width: number, public height: number){
        super()
    }

    area(): number {
        return this.width * this.height
    }
}