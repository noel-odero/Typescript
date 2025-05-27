function doSomething3(a: string | number, b: string | string[]) {
    if(a === b) {
        a.split(',');
        b.toLocaleLowerCase();
    } else {
        console.log(a, b);
    }
}