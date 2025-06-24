"use strict";
class StreetFighter {
    constructor() { }
    move() { }
    fight() {
        console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
    }
}
class Ryu extends StreetFighter {
    getSpecialAttack() {
        return "Hadocken";
    }
    get name() {
        return "Ryu";
    }
}
const ryu = new Ryu();
console.log(ryu.getSpecialAttack());
ryu.fight();
