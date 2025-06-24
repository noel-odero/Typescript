function separateTypes(arr: (string|number)[]): { strings: string[], numbers: number[] }{
    const strings: string[] = [];
    const numbers: number[] = [];

    for(const value of arr){
        if(typeof value === 'string'){
            strings.push(value)
        } else{
            numbers.push(value);
        }
    }

    return {strings, numbers}
}


console.log(separateTypes([1, 4, "Noel", "Mercy", 34, "Manzi"]))


// 4. You have an array that contains mixed data types: `(string | number)[]`. Write a function called `separateTypes` that takes this mixed array and returns an object with two properties:
//     - `strings`: an array containing only the string values
//     - `numbers`: an array containing only the number values
    
//     Use proper type guards to check the types. 
    
//     For example, if given `[1, "hello", 2, "world", 3]`, it should return `{ strings: ["hello", "world"], numbers: [1, 2, 3] }`.