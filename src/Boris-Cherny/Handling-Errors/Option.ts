type Option<T> = Some<T> | None;

interface Some<T> {
    readonly kind: "Some";
    readonly value: T;
}

interface None {
    readonly kind: "None";
}

function Some<T>(value: T): Some<T> {
    return { kind: "Some", value };
}

const None: None = { kind: "None" };

//------------------------------------------------------------------------------

function divide(a: number, b: number): Option<number> {
    // Option indica que puede devolver un valor o no
    if (b !== 0) {
        return Some(a / b); // Some indica que devuelve un valor
    } else {
        return None; // None indica que no devuelve nada
    }
}
const result1 = divide(10, 2); // Resultado: Some<5>
console.log("result1: ", result1);
const result2 = divide(10, 0); // Resultado: None
console.log("result2: ", result2);
