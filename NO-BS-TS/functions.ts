function addNumbers(a: number, b: number): number {
    return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`;
// union types
export const format = (title: string, param: string | number): string => `${title} ${param}`
// void
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
}

// promise functions
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`)

// Rest parameters

function introduce(saltutation: string, ...names:string[]): string {
    return `${saltutation} ${names.join(" ")}`;
}

// Typescript only enforced types at compile time, not runtime


export function getName(user: {first: string, last: string}): string {
    return `${user.first} ${user.last}`;
}