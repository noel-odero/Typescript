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
myDB.set("foo", "bar");
// myDB.db["foo"] == "baz"
console.log(myDB.get("foo"));
console.log(myDB.saveToString());
const myDB2 = new PersistibleMemoryDB();
