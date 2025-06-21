// function that logs a function

function myLogFunction() {
    return (str: string) => {
        console.log(str)
    }
}

const logger = myLogFunction()
logger("Noel")


// functions creating a class
function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: String = "";
        log(str: string) {
            console.log(str);
            this.completeLog += str + "\n"
        }
        dumplog(){
            return this.completeLog
        }
    }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger()
logger2.log("foo");
console.log(logger2.dumplog())


// function creating a generic classes

function CreatSimpleMemoryDatabase<T>() {
return class SimpleMemoryDAtabase{
    private db: Record<string, T> = {};

    set(id: string, value: T) {
        this.db[id] = value;
    }

    get(id: string): T{
        return this.db[id];
    }
    getObject(): object{
        return this.db
    };
}
}


const StringDatabase = CreatSimpleMemoryDatabase<string>();


const sbd1 = new StringDatabase();
sbd1.set("a", "hello")



// creating a mixin
type Constructor<T> = new (...args: any[]) => any


function Dumpable<T extends Constructor<{getObject(): object}>>(Base: T) {
    return class Dumpable extends Base{
        dump() {
            console.log(this.getObject())
        }
    }
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const sbd2 = new DumpableStringDatabase();
sbd1.set("a", "hello NOEL");
sbd2.dump();