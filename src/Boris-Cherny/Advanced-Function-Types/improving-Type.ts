// T extends unknown[] indica que T es un array de cualquier tipo de datos
//...ts: T indica que ts es un array de cualquier tipo de datos y que devuelve un array de cualquier tipo de datos
function tuple<T extends unknown[]>(...ts: T): T {
    return ts;
}

// todo lo que tome lo regresa como un array de cualquier tipo de datos
let as = tuple(1, true, "maria", {
    name: "elide",
    apellidos: "zavala vinagre",
}); // [number, boolean]
console.log(as);
