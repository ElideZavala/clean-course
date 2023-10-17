// T significa que es un tipo de dato generico y puede ser cualquier tipo de dato

type IsString<T> = T extends string ? true : false;

type A1 = IsString<string>; // true
type B1 = IsString<number>; // false

type ArrayFilter<T> = T extends any[] ? true : false;

type A2 = ArrayFilter<string>; // false
type B2 = ArrayFilter<string[]>; // true

const datos: IsString<any> = isString("Hola"); // true
