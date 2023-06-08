const enum Language {
    English = 1,
    Spanish = 2,
    Russian = 3
}

const lenguage = Language.Russian;

// console.log(lenguage);

// no es un objeto
export const enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pick = '0xc10050',
    White = 255
}

const red = Color.Red;
const blue = Color.Blue;
const pick = Color.Pick;
const white = Color.White;

// Para prevenir el unifined podemos englobarlo en una variable const.

console.log(red,
    blue,
    pick,
    white);

const enum Flippable {
    Burger = 'Hamburgesa',
    Chair = 'Silla',
    Cup = 'Copa',
    Skateboard = 'Local',
    Table = 'Mesa'
}

function flip(f: Flippable) {
    return f
}

flip(Flippable.Chair);
console.log(flip(Flippable.Chair));
flip(Flippable.Cup)
console.log(flip(Flippable.Burger));
