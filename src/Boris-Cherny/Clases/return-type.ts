class MySet {
    private set = new Set<number>();

    has(value: number): boolean {
        return this.set.has(value);
    }

    add(value: number): this {
        this.set.add(value);
        return this;
    }

    getValues(): number[] {
        return [...this.set];
    }

    delete(value: number): boolean {
        return this.set.delete(value);
    }
}

let mySet = new MySet();
mySet.add(1).add(2).add(3);
mySet.add(4);
console.log(mySet.has(4));
console.log(mySet.getValues());

// class MutableSet extends Set {
//     private MutableSet = new Set<number>();

//     delete(value: number): boolean {
//         return this.MutableSet.delete(value);
//     }

//     add(value: number): MutableSet {
//         this.MutableSet.add(value);
//         return this;
//     }
// }
