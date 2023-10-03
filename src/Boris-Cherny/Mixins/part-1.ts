type ClassContructor<T> = new (...args: any[]) => T;

function withEZDebug<
    C extends ClassContructor<{
        getDebugValue(): object;
    }>
>(Class: C) {
    return class extends Class {
        debug() {
            let Name = Class.constructor.name;
            let value = this.getDebugValue();
            return Name + "(" + JSON.stringify(value) + ")";
        }
    };
}

class HardDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + " " + this.lastName,
        };
    }
}

let User = withEZDebug(HardDebugUser);
let user1 = new User(3, "Emma", "Gluzman");
console.log(user1.debug());
// user1.debug();
