/* Usar Type */

type Food = {
    calories: number;
    tasty: boolean;
};

type Sushi = Food & {
    salty: boolean;
};
// Sushi tendrá las propiedades de Food y las propiedades de Sushi

type Cake = Food & {
    sweet: boolean;
};
// Cake tendrá las propiedades de Food y las propiedades de Cake

const sushi: Sushi = {
    calories: 100,
    tasty: true,
    salty: true,
};

const cake: Cake = {
    calories: 1000,
    tasty: true,
    sweet: true,
};

console.log(cake.calories);

/* Usar Interface */

interface Food2 {
    calories: number;
    tasty: boolean;
}

interface Sushi2 extends Food2 {
    salty: boolean;
}

interface Cake2 extends Food2 {
    sweet: boolean;
}

const sushi2: Sushi2 = {
    calories: 100,
    tasty: true,
    salty: true,
};

const cake2: Cake2 = {
    calories: 1000,
    tasty: true,
    sweet: true,
};

/* Diferencias a Interface */
type Definido = number;
type sinDefinir = Definido | string;

let definido: Definido = 5;
let sinDefinir: sinDefinir = "cinco";

interface A {
    good(x: number): string;
    bad(x: number): string;
}

interface B extends A {
    good(x: string | number): string;
    bad(x: number | []): string;
}

const objet1: A = {
    good(x: number): string {
        return `Good ${x}`;
    },
    bad(x: number): string {
        return `Bad ${x}`;
    },
};

console.log(objet1.good(5));
