function filter(array: number[], f: (item: number) => boolean) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }

    return result;
}

// filter([1,2,3,4], [1,2,3,4].indexOf(3) )


// type Filter = {
//     (array: unknown,f: unknown) => unknown[]
// }

type Filter = {
    (array: number[], f: (item: number) => boolean): number[];
}

const items = [
    1, 2, 3, 4, 5, 6, 7
]



let filterTwo: Filter = (items, items.includes(3)) {
}