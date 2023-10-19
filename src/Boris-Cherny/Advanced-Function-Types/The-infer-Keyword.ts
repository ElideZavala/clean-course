type ElementType<T> = T extends unknown[] ? T[number] : T; // T[number] es el tipo de los elementos de T
type AB = ElementType<number[]>; // number

// usando infer
type ElementType2<T> = T extends (infer U)[] ? U : T; // infer U es el tipo de los elementos de T
type AB2 = ElementType2<number[]>; // number

// una Condicional Distributiva es una condicional que tiene un tipo que es una union de tipos
// infer es una palabra reservada que se usa para inferir tipos en condicionales distributivos
// en este caso, infer U es el tipo de los elementos de T, y T es un array, por lo que U es el tipo de los elementos de T

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;
// SecondArg es una condicional distributiva porque F es una union de tipos
// F es una union de tipos porque es una funcion que puede recibir cualquier cantidad de argumentos
// b es el segundo argumento de F, y es el tipo de B
// retorna B si F es una funcion, y retorna never si F no es una funcion

//ejemplo de uso de SecondArg
type F1 = (a: number, b: string) => void;
type S1 = SecondArg<F1>; // Es string porque es el segundo argumento de F1
type F2 = (a: number) => void;
type S2 = SecondArg<F2>; // Es never porque F2 solo tiene un argumento
type F3 = string;
type S3 = SecondArg<F3>; // Es never porque F3 no es una funcion
// never es un tipo que no tiene valores, es decir que no hay ningun valor que sea de tipo never
// por ejemplo, si tenemos un array de tipo never, ese array no puede tener ningun elemento porque no hay ningun valor que sea de tipo never

type F = typeof Array["prototype"]["slice"];
type Ac = SecondArg<F>; // Es number | undefined porque el segundo argumento de slice es opcional
