type UserTextEvent = {
    type: "TextEvent";
    value: string;
    target: HTMLElement;
};
type UserMouseEvent = {
    type: "MouseEvent";
    value: [number, number];
    target: HTMLElement;
};

type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
    if (typeof event.value === "string") {
        event.value; // string
        event.target; // HTMLInputElement | HTMLElement (!!!)
        return;
    }
    event.value; // [number, number]
    event.target; // HTMLInputElement | HTMLElement (!!!)
}

// Ejemplos de como usar
// handle({ type: 'TextEvent', value: 'Hello', target: document.getElementById('input')! });

// ----------------------------------------------
const textEvent: UserTextEvent = {
    type: "TextEvent",
    value: "Hello",
    target: document.getElementById("input")!,
};

const mouseEvent: UserMouseEvent = {
    type: "MouseEvent",
    value: [10, 20],
    target: document.getElementById("btn")!,
};

textEvent.target.addEventListener("click", () => {
    console.log("click");
});

const element1 = handle(textEvent);
const element2 = handle(mouseEvent);
console.log(element1);
console.log(element2);
