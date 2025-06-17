"use strict";
class InMemoryDatabase {
    constructor() {
        this.db = {};
    }
    get(id) {
        return this.db[id];
    }
    set(id, value) {
        this.db[id] = value;
    }
}
class PersistibleMemoryDB extends InMemoryDatabase {
    saveToString() {
        return JSON.stringify(this.db);
    }
    restoreFromString(stroredState) {
        this.db = JSON.parse(stroredState);
    }
}
const myDB = new PersistibleMemoryDB();
myDB.set("foo", 22);
// myDB.db["foo"] == "baz"
console.log(myDB.get("foo"));
const saved = myDB.saveToString();
myDB.set("foo", 33);
console.log(myDB.get("foo"));
const myDB2 = new PersistibleMemoryDB();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));
