"use strict";
// generic function
function simpleState(initial) {
    let val = initial;
    return [
        () => val,
        (v) => {
            val = v;
        }
    ];
}
const [st1getter, st1setter] = simpleState(1);
console.log(st1getter());
st1setter(26);
console.log(st1getter());
const [st2getter, st2setter] = simpleState(null);
console.log(st2getter());
st2setter("Noel");
console.log(st2getter());
function ranker(items, rank) {
    const ranks = items.map((item) => ({
        item,
        rank: rank(item)
    }));
    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map((rank) => rank.item);
}
const Pokemon = [
    {
        name: "Bulbasaur",
        hp: 20
    },
    {
        name: "Megasaus",
        hp: 5
    },
];
const ranks = ranker(Pokemon, ({ hp }) => hp);
console.log(ranks);
