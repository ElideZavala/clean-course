function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));
console.log(add.apply(null, [10, 20]));
console.log(add.call(null, 10, 20));
console.log(add.bind(null, 10, 20)()); // *Nos regresara una nueva Funcion.

/* 
! Explicacion del codigo
?Este código es una función llamada "add", que recibe dos parámetros numéricos "a" y "b", y devuelve la suma de ambos. La función puede ser llamada utilizando los métodos "console.log", "apply", "call" y "bind".

?"console.log(add(10, 20));": Llama a la función "add" y le pasa los valores "10" y "20" como parámetros, y luego imprime el resultado en la consola.

?"console.log(add.apply(null, [10, 20]));": Llama a la función "add" utilizando el método apply, lo que significa que primer parámetro es el contexto en el que se ejecutará la función (que en este caso es "null"), seguido de un array con los parámetros que se le pasan a la función (en este caso "[10, 20]"). Luego, imprime el resultado en la consola.

?"console.log(add.call(null, 10, 20));": Llama a la función "add" utilizando el método call, que también toma como primer parámetro el contexto en el que se ejecuta la función (en este caso "null"), seguido de los parámetros de la función (en este caso "10" y "20"). Luego, imprime el resultado en la consola.

?"console.log(add.bind(null, 10, 20)());": Llama a la función "add" utilizando el método bind, que también toma como primer parámetro el contexto en el que se ejecutará la función (en este caso "null"), seguido de los parámetros de la función (en este caso "10" y "20"). Sin embargo, con "bind", la función no se ejecuta inmediatamente; en cambio, devuelve una nueva función que tiene los parámetros "a y "b" predefinidos como "10" y "20". Luego, llaman a esta nueva función en una llamada a función con paréntesis "()", que devuelve el resultado e imprime en la consola.
*/

