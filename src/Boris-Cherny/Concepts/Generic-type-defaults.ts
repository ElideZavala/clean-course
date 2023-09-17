//TODO /* Generar un tipo alias de Eventos */
// type MyEvent<T> = {
//     target: T;
//     type: string;
// };

// const event1: MyEvent<string> = {
//     target: "button",
//     type: "click",
// };

// const button = document.querySelector(event1.target) as HTMLButtonElement;
// button.addEventListener(event1.type, () => console.log("clicked"));

//TODO /* Expecificar el tipo de eventos */

// type MyEvent<T> = {
//     target: T;
//     type: string;
// };

// const myButton = document.querySelector("button") as HTMLButtonElement;

// let buttonEvent: MyEvent<HTMLButtonElement> = {
//     target: myButton,
//     type: 'click'
// }

//TODO /* Como cuando no conocemos en especifico el elemento */
// Generico el cual por defecto es un HTMLElement

// type MyEvent<T = HTMLElement> = {
//     target: T
//     type: string
// }

// const myButton = document.querySelector('button') as HTMLButtonElement
// let buttonEvent: MyEvent = {
//     target: myButton,
//     type: 'click'
// }

//TODO /* A segurarnos que T sea un HTML element */
// La diferencia es que impone una restriccion adicional a T, que debe ser un HTMLElement o un subtipo de HTMLElement

// type MyEvent<T extends HTMLElement = HTMLElement> = {
//     target: T;
//     type: string;
// };

// let buttonEvent: MyEvent<HTMLDivElement> = {
//     target: document.querySelector("div") as HTMLDivElement,
//     type: "click",
// };

// buttonEvent.target.addEventListener(buttonEvent.type, () => console.log("clicked"));

//TODO /* Buena practica */
// generalment los opcional tienen a aparecer al final de la lista de parametros
// type MyEvent<Type extends string, Target extends HTMLElement = HTMLElement> = {
//     target: Target;
//     type: Type;
// };
