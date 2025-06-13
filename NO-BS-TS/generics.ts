// generic function


function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        
        () => val,
        (v: T) => {
            val = v;
        }
    ]
    
}

const [st1getter, st1setter] = simpleState(1);

console.log(st1getter());
st1setter(26);
console.log(st1getter())


const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("Noel");
console.log(st2getter())



// ranker

interface Rank <rankItem>{
    item: rankItem;
    rank: number;
}

function ranker<rankItem>(items: rankItem[], rank: (v: rankItem) => number): rankItem[] {
    
    const ranks: Rank<rankItem>[] = items.map((item) => ({
        item,
        rank: rank(item)
    }));
    ranks.sort((a, b) =>a.rank - b.rank );

    return ranks.map((rank) => rank.item);
}


interface pokemon {
    name: string;
    hp: number;
}

const Pokemon: pokemon[] = [
    {
        name: "Bulbasaur",
        hp: 20
    },
    {
        name: "Megasaus",
        hp: 5
    },

]

const ranks = ranker(Pokemon, ({ hp }) => hp)

console.log(ranks)

// extends and extends keyof
// Use extends keyword to constrain the type parameter to a specific type.
// Use extends keyof to constrain a type that is the property of another object.


function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person = merge(
    { name: 'John' },
    {age: 20}
);

console.log(person)

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str);