// function params

export function printToFile(text: string, callback: ()=>{}): void {
    console.log(text);
    callback()
}

export type MutationFunction = (v: number) => number

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate)
}

console.log(arrayMutate([1,3,4], (v) => v * 10) )


const myNewMutateFunv: MutationFunction = (v: number) => v* 100;

console.log(myNewMutateFunv(45))

// Returning functions
export type adderFunction = (val: number) => number
export function createAdder(num: number): adderFunction {
    return (val: number) => num + val;
}

const addOne = createAdder(1)
console.log(addOne(55))