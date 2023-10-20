// Tell TypeScript about .zip
interface Array<T> {
    zip<U>(list: U[]): [T, U][];
}

// Implement .zip
Array.prototype.zip = function <T, U>(this: T[], list: U[]): [T, U][] {
    return this.map((v, k) => tuple(v, list[k]));
};

function tuple<T, U>(v: T, u: U): [T, U] {
    return [v, u];
}
