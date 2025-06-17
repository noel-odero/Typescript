interface Database<T, K> {
    get(id: K): T;
    set(id: K, value: T): void
}
interface Persistible {
    saveToString(): string;
    restoreFromString(stroredState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
    protected db: Record<K, T> = {} as Record<K, T>
    get(id: K): T{
        return this.db[id];
    }
    set(id: K, value: T): void{
        this.db[id] = value;
    }
}

class PersistibleMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistible {
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(stroredState: string): void {
        this.db = JSON.parse(stroredState)
    }

}


const myDB = new PersistibleMemoryDB<number, string>();
myDB.set("foo", 22);
// myDB.db["foo"] == "baz"
console.log(myDB.get("foo"))
const saved = myDB.saveToString();
myDB.set("foo", 33)
console.log(myDB.get("foo"))


const myDB2 = new PersistibleMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"))
