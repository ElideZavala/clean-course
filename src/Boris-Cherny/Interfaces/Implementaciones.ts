interface Animal {
    readonly name: string; // Propiedad de solo lectura (no se puede modificar)
    eat(food: string): void;
    sleep(hours: number): void;
}

interface Feline {
    meow(): void;
}

class cat implements Animal, Feline {
    name: string = "Gato";

    eat(food: string): void {
        console.info(`A cat eats ${food}. 'Mmm, delicious!'`);
    }

    sleep(hours: number): void {
        console.info(`A cat sleeps for ${hours} hours.`);
    }

    meow(): void {
        console.info("Meow");
    }
}

class dog implements Animal {
    name: string = "Perro";

    eat(food: string): void {
        console.info(`A dog eats ${food}. 'Mmm, delicious!'`);
    }

    sleep(hours: number): void {
        console.info(`A dog sleeps for ${hours} hours.`);
    }
}

const benites = new cat();
benites.eat("fish");
const perro = new dog();
perro.sleep(3);
benites.meow();
console.log(benites.name);
