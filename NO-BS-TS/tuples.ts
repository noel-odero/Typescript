// defining a tuple

type ThreeDCoordinates = [x: number, y: number, z: number];

function add3DCoordinates(c1: ThreeDCoordinates, c2:ThreeDCoordinates ): ThreeDCoordinates {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2]

    ]
    
}

console.log(add3DCoordinates([0,0,0], [12, 20, 34]))


function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        
        () => str,
        (v: string) => {
            str = v;
        }
    ]
    
}

const [str1getter, str1setter] = simpleStringState("Hello")
const [str2getter, str2setter] = simpleStringState("Noel")

console.log(str2getter());
console.log(str1getter())
str1setter("goodbye")
console.log(str1getter());
console.log(str2getter())