type Greet = (name: string) => string

const greet: Greet = name => `Hello ${name}`

// console.log("greet: ", greet("Elide"));

type Log = (message: string, userId?: string) => void

const log: Log = (message, userId = "Not signed in") => {
    const time = new Date().toISOString()
    console.log(time, message, userId);
}

// log("User signed in")

type SumVariadicSafe = (...numbers: number[]) => number

const sumVariadicSafe: SumVariadicSafe = (...numbers) => numbers.reduce((total, n) => total + n, 0)

console.log("sumVariadicSafe: ", sumVariadicSafe(1, 2, 3, 4, 5));