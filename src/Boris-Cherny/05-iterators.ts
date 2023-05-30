let numbers = {
    *[Symbol.iterator](): IterableIterator<number> {
        for (let n = 1; n <= 10; n++) {
            yield n
        }
    }
}

// *Imprime los numeros del 1 al 10
for (let num of numbers) {
    console.log(num)
}

// *Inprime un array con todos los numeros del 1 al 10
let allNumbers = [...numbers];
console.log(allNumbers);

// *Destructurar un array
let [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(...rest);

