let numbers = {
    *[Symbol.iterator]() :IterableIterator<number> {
        for(let n = 1; n <= 10; n++) {
            yield n
        }
    }
}