let a1 = "x";
let b1 = 3;
var c1 = true;
const d1 = { x: 3 };

enum E {
    X,
    Y,
    Z,
}
let e1 = E.X;
console.log(e1);

//----------------------------------------------
const a2 = "x";
const b2 = 3;
const c2 = true;
const d2 = { x: 3 };

enum E2 {
    X,
    Y,
    Z,
}
const e2 = E2.X;
console.log(e2);

//----------------------------------------------
const a3: "x" = "x";
const b3: 3 = 3;
const c3: true = true;
const d3: { x: 3 } = { x: 3 };

// ----------------------------------------------

function x1() {
    let a = null;
    a = 3;
    a = "b";
    return a;
}

console.log(x1());
// ----------------------------------------------
let a4 = { x: 3 };
let b4: { x: 3 };
let c4 = { x: 3 } as const; // la propiedad x es readonly no se puede modificar

let d4 = [1, { x: 3 }];
// let e4: [1, { x: 2 }] as const

// ----------------------------------------------
type Options = {
    baseURL: string;
    cacheSize?: number;
    tier?: "prod" | "dev";
};

class API {
    constructor(private options: Options) {}
}

new API({
    baseURL: "https://api.mysite.com",
    tier: "prod",
});

// formas de arreglar que no te marque error
new API({
    baseURL: "https://api.mysite.com",
    badTier: "prod",
} as Options);

// let options: Options = {
//     baseURL: "https://api.mysite.com",
//     badTier: 'prod'
// }
// new API (options)
