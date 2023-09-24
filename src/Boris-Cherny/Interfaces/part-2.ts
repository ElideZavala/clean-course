interface User {
    name: string;
}

interface User {
    age: number;
}

let user: User = {
    name: "John",
    age: 30,
};


let Users: User[] = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Mary",
        age: 25,
    },
    {
        name: "Anna",
        age: 28,
    },
];

/* Con Typos */

// type User1 = {
//     name: string;
// }

// type User1 = {
//     age: number;
// }

// No se puede redefinir un tipo

/* Interfaces con la misma Variable */

// interface User1 {
//     age: string;
// }

// interface User1 {
//     age: number;
// }

// No se puede redefinir una interfaz con la misma variable