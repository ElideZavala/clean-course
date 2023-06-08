let x = {
    a () {
        return this
    }
}

// * Invocamos a un metodo. 
console.log(x.a());


let a = x.a

// * this se convierte en undefined en el cuerpo de a().
console.log(a());

function fancyDate( this: Date )  {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

console.log(fancyDate.call(new Date));

// * Despues del undefined, tomara los  valores, gracias al call
/*
TODO call(), que permite establecer el valor de this dentro de la función.
? En este ejemplo, se pasa como parámetro new Date, que genera un objeto Date que representa la fecha y hora del momento actual. Al pasar este objeto a call(), this dentro de la función fancyDate será una referencia a este nuevo objeto Date.
? En resumen, este código muestra cómo definir una función que se pueda utilizar como método en un objeto Date y cómo ejecutarla en el contexto de un objeto Date específico.
*/