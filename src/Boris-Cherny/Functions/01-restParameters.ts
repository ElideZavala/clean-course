function sum(numbers: number[]): number {
    return numbers.reduce((total, n ) => total + n, 0);
}

// console.log(sum([5, 2, 4]));
/*
? function sum(numbers: number[]): number {: Esto define una función llamada "sum" que acepta un
? parámetro llamado "numbers" de tipo "number[]" (un arreglo de números) y devuelve un valor de 
? tipo "number" (un número).

? return numbers.reduce((total, n) => total + n, 0);: Aquí se utiliza el método "reduce" en el 
?arreglo "numbers". El método "reduce" se utiliza para iterar sobre todos los elementos de un 
?arreglo y acumular un valor resultante. Toma una función de devolución de llamada y un valor 
? inicial como argumentos.

? La función de devolución de llamada (total, n) => total + n se utiliza para sumar los elementos 
? del arreglo. Recibe dos parámetros: "total", que es el valor acumulado hasta el momento, y "n", 
? que es el elemento actual que se está procesando. La función simplemente suma el valor actual 
? al valor acumulado y devuelve el resultado.

? El segundo argumento de "reduce" es el valor inicial, que en este caso es 0. Esto significa 
? que la suma comenzará desde cero.

? El resultado de la función "reduce" es la suma de todos los elementos del arreglo, que se 
? devuelve como resultado de la función "sum".
? En resumen, esta función toma un arreglo de números, los suma utilizando el método "reduce" 
? y devuelve el resultado de la suma.
*/

function sumVariadic(...numbers: number[]): number { 
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0)
}

const listNumers: number[] = [1, 2, 3];

console.log(sumVariadic(...listNumers)); // arguments se typea como ...numbers : number[];