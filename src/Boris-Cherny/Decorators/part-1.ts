type Payload = {
    id: number;
    name: string;
};

type ClassConstructor<T> = new (...args: any[]) => T;

function serializable<
    // T extiende de ClassConstructor y tiene un metodo getValue que retorna un Payload
    T extends ClassConstructor<{
        getValue(): Payload;
    }>
    // Constructor es una funcion que retorna un objeto
>(Constructor: T) {
    // retornamos una clase que extiende de Constructor y tiene un metodo serialize que retorna un string
    return class extends Constructor {
        serialize() {
            return JSON.stringify(this.getValue());
        }
    };
}

@serializable
class APIPayload {
    getValue(): Payload {
        return {
            id: 3,
            name: "Emma",
        };
    }
}

let DecoratedAPIPayload = serializable(APIPayload);
let payload = new DecoratedAPIPayload();
console.log(payload.serialize());
