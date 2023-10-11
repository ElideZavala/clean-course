import { Weekdays, Days } from "./The-Record-Type";

// K extends keyof any es decir que K puede ser cualquier tipo de dato que extienda de cualquier tipo de dato y T es el tipo de dato que va a tener cada propiedad
type Record<K extends keyof any, T> = {
    // P in K es decir que P es cada una de las propiedades que extiende de K y T es el tipo de dato que va a tener cada propiedad
    [P in K]: T;
};

type Person = Record<"name" | "age", string | number>;

const person: Person = {
    name: "Elide",
    age: 0,
};
type Point = Record<"x" | "y", number>;

function createPoint(x: number, y: number): Point {
    return {
        x,
        y,
    };
}
//--------------------------------------------

/* Account principal */
type Account = {
    id: number;
    isEmployee: boolean;
    notes: string[];
};

// * Make all fields optional (1)
type OptionalAccount = {
    [K in keyof Account]?: Account[K]; // Account[K] es el tipo de dato que tiene cada propiedad
};

// Example of use (1)
const optionalAccount: OptionalAccount = {
    id: 1,
    // isEmployee: true, // no marca error porque es opcional
    notes: ["This is a note"],
};

// * Make all fields nullable (2)
type NullableAccount = {
    [K in keyof Account]: Account[K] | null; // puede ser el tipo de dato que tiene cada propiedad o null
};

// Example of use (2)
const nullableAccount: NullableAccount = {
    id: 1,
    isEmployee: null,
    notes: null,
};

// * Make all fields readonly (3)
type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]; // no puede ser modificado por ser readonly
};

// Example of use (3)
const readonlyAccount: ReadonlyAccount = {
    id: 1,
    isEmployee: true,
    notes: ["This is a note"],
};

// readonlyAccount.id = 2; // marca error porque es readonly

// * Make all fields writable again (equivalent to Account) (4)
type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: ReadonlyAccount[K]; // quita el readonly
};

// Example of use (4)
const writableAccount: Account2 = {
    id: 1,
    isEmployee: true,
    notes: ["This is a note"],
};

writableAccount.id = 2; // no marca error porque ya no es readonly

// * Make all fields required again (equivalent to Account) (5)
type Account3 = {
    [K in keyof OptionalAccount]-?: OptionalAccount[K]; // quita el ? para que sea requerido de nuevo
};

// Example of use (5)
const requiredAccount: Account3 = {
    id: 1,
    isEmployee: true, // marca error porque es requerido
    notes: ["This is a note"],
};
