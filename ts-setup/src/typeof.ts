function doSomething(value: string | number) {
    if(typeof value === 'string') {
        console.log(value.toLocaleLowerCase());
    } else if(typeof value === 'number') {
        console.log(value.toFixed(2));
    }
}

doSomething("Hello World");
doSomething(123.456);



function checkAndPrint(value: string | string[] | null) {
    if (value && typeof value === 'object') {
        for (const item of value) {
            console.log(item.toUpperCase());
        }
    } else {
        console.log( value && value.toUpperCase());
    }
}