"use strict";
// function that logs a function
function myLogFunction() {
    return (str) => {
        console.log(str);
    };
}
const logger = myLogFunction();
logger("Noel");
// functions creating a class
function createLoggerClass() {
    return class MyLoggerClass {
        constructor() {
            this.completeLog = "";
        }
        log(str) {
            console.log(str);
            this.completeLog += str + "\n";
        }
        dumplog() {
            return this.completeLog;
        }
    };
}
const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("foo");
console.log(logger2.dumplog());
// function creating a generic classes
function CreatSimpleMemoryDatabase() {
    return class SimpleMemoryDAtabase {
        constructor() {
            this.db = {};
        }
        set(id, value) {
            this.db[id] = value;
        }
        get(id) {
            return this.db[id];
        }
        getObject() {
            return this.db;
        }
        ;
    };
}
const StringDatabase = CreatSimpleMemoryDatabase();
const sbd1 = new StringDatabase();
sbd1.set("a", "hello");
function Dumpable(Base) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject());
        }
    };
}
const DumpableStringDatabase = Dumpable(StringDatabase);
const sbd2 = new DumpableStringDatabase();
sbd1.set("a", "hello NOEL");
sbd2.dump();
