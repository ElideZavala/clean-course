type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
) => void;

class Promises<T, E extends Error> {
    constructor(f: Executor<T, E>) {}
    then<U, F extends Error>(g: (result: T) => Promises<U, F>): Promises<U, F>;
    catch<U, F extends Error>(g: (error: E) => Promises<U, F>): Promises<U, F>;
}

let _a: () => Promises<number, TypeError>;
let _b: (s: string) => Promises<number, never>;
let _c: () => Promises<boolean, RangeError>;

_a()
    .then(_b)
    .catch((e) => _c)
    .then((result) => console.log("Done", result))
    .catch((e) => console.error("Error", e));
