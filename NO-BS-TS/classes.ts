interface Database {
    get(id: string): string;
    set(id: string, value: string): void
}
interface Persistible {
    saveToString(): string;
    restoreFromString(stroredState: string): void;
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {

    }
    get(id: string): string{
        return this.db[id];
    }
    set(id: string, value: string): void{
        this.db[id] = value;
    }
}

class PersistibleMemoryDB extends InMemoryDatabase implements Persistible {
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(stroredState: string): void {
        this.db = JSON.parse(stroredState)
    }

}


const myDB = new PersistibleMemoryDB();
myDB.set("foo", "bar");
// myDB.db["foo"] == "baz"
console.log(myDB.get("foo"))
console.log(myDB.saveToString())


const myDB2 = new PersistibleMemoryDB();
