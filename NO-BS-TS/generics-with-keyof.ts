function pluck<Datatype, KeyType extends keyof Datatype>(items: Datatype[], key: KeyType): Datatype[KeyType][] {
    return items.map((item) => item[key])
}

const dogs = [
    {name: "Mimi", age: 12},
    {name: "Mim0", age: 10},
    
]

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

// event map

interface BaseEvent {
    time: number;
    user: string;
}

interface eventMap {
    addTocart: BaseEvent & {quantity: number; productID: string;},
    checkout: BaseEvent
}

function sendEvent<Name extends keyof eventMap >(name: string, data: unknown): void {
    console.log([name, data])
}

sendEvent("addToCart", {productID: 'foo', user: "baz", quantity: 1, time: 1})
sendEvent("checkout", {user: "baz", time: 1})
