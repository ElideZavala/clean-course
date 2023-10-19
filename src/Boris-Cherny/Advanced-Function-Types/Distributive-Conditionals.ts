type ToArray<T> = T[];
type A3 = ToArray<number>; // number[]
type B3 = ToArray<number | string>; // (number | string)[]

type ToArray2<T> = T extends unknown ? T[] : T[];
type A4 = ToArray2<number>; // number[]
type B4 = ToArray2<number | string>; // (number | string)[]

// la diferencia entre ToArray y ToArray2 es que ToArray2 es distributiva y ToArray no lo es, por lo que ToArray2 es más genérica que ToArray

// al decir distributiva, nos referimos a que si tenemos un tipo que es una union de tipos, ToArray2 va a aplicar el tipo a cada uno de los tipos de la union, mientras que ToArray no lo hace

/* ----------------------------------------------------- */
// lo que hace Without es quitarle a T los tipos que estan en U, es decir que si T es una union de tipos, Without va a quitarle a T los tipos que estan en U
type Without<T, U> = T extends U ? never : T;

type A5 = Without<boolean | number | string, boolean>; // number | string

type A6 =
    | Without<boolean, boolean>
    | Without<number, boolean>
    | Without<string, boolean>; // number | string

type A7 =
    | (boolean extends boolean ? never : boolean) // never
    | (number extends boolean ? never : number) // number
    | (string extends boolean ? never : string); // string

type A8 = never | number | string; // number | string

type A9 = number | string;
/* ----------------------------------------------------- */
