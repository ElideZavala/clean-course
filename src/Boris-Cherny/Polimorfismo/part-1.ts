export interface MyMap<K, V> {
    get(key: K): V;
    set(key: K, value: V): void;
    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1>;
}

export class MyMap<K, V> {
    private map: Map<K, V>;

    constructor(initialKey: K, initialValue: V) {
        this.map = new Map<K, V>();
        this.map.set(initialKey, initialValue);
    }

    get(key: K): V | undefined {
        return this.map.get(key);
    }

    set(key: K, value: V): void {
        this.map.set(key, value);
    }

    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
        const mergeMap = new MyMap<K | K1, V | V1>(null as any, null as any);
        this.map.forEach((value, key) => mergeMap.set(key, value));
        map.map.forEach((value, key) => mergeMap.set(key, value));
        return mergeMap;
    }

    static of<K, V>(k: K, v: V): MyMap<K, V> {
        return new MyMap(k, v);
    }
}

let as = new MyMap<string, number>("k", 1);
let bs = new MyMap("j", true);
