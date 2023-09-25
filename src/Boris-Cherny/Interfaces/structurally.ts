class Zebra {
    trot() {
        console.log("I am trotting");
    }
}

class Poodle {
    trot() {
        console.log("I am trotting");
    }
}

// creamos la funcion ambleAround que recibe un animal de tipo Zebra
function ambleAround(animal: Zebra) {
    animal.trot();
}

let zebra = new Zebra();
let poodle = new Poodle();

// llamamos a la funcion ambleAround con un animal de tipo Zebra
ambleAround(zebra);
// llamamos a la funcion ambleAround con un animal de tipo Poodle
ambleAround(poodle);

/* Asignacion */
class A {
    private x = 1;
}

class B extends A {}

function f(a: A) {
    console.log(a);
}

f(new A());
f(new B());
// f({ x:1 })

/*  Declare both values and types  */
let Ar = 1999;

type a = number;
interface b {
    (): number;
}

let c: a = Ar;
let d: b = () => Ar;

console.log(d());

// if( a + 1> 3)
// let x: a = 3

class C {}
let b: C = new C();

enum E {
    F,
    G,
}
let e: E = E.G;
console.log(e);

/* Esta muy buena para implentar en localStorage */

type State = {
    [key: string]: string;
};

interface StringDatabase {
    state: State;
    get(key: string): string | null;
    set(key: string, value: string): void;
}

interface StringDatabaseConstructor {
    new (state?: State): StringDatabase;
    from(state: State): StringDatabase;
}

class StringDatabase implements StringDatabase {
    constructor(public state: State = {}) {}

    // state: State = {};
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null;
    }

    set(key: string, value: string): void {
        this.state[key] = value;
    }

    static from(state: State) {
        let db = new StringDatabase();
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}

// como usar para una solo variable
const db = new StringDatabase();
db.set("a", "hello");
db.set("b", "world");
console.log(db.get("a"));
console.log(db.get("b"));

// como usar from (constructor)
const db2 = StringDatabase.from({
    a: "hello",
    b: "world",
});
console.log(db2.get("a"));
console.log(db2.get("b"));
