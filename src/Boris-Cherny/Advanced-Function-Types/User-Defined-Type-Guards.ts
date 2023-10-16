// a type guard is a function that returns a boolean and checks the type of a variable
// el parametro a es de tipo unknown y devuelve un booleano
// unknown es un tipo de datos que no se sabe que tipo de dato es

// a is string es un type predicate, es una funcion que devuelve un booleano y chequea el tipo de una variable
// si es true, el tipo de dato es string
function isString(a: unknown): a is string {
    return typeof a === "string";
}

isString("a"); // evalua a true
isString(1); // evalua a false
console.log(isString("a"));

function parseInput(input: string | number) {
    let formattedInput: string;
    if (isString(input)) {
        formattedInput = input.toUpperCase();
    } else {
        formattedInput = input.toFixed(2);
    }
    return formattedInput;
}

type LegacyDialog = {
    id: number;
    dialog: string;
};

type Dialog = {
    id: number;
    dialog: string;
    metadata: string;
};

// con is se puede hacer un type guard para saber si el tipo de dato es LegacyDialog o Dialog
function isLegacyDialog(dialog: LegacyDialog | Dialog): dialog is LegacyDialog {
    // si regresa true, el tipo de dato es LegacyDialog y si regresa false, el tipo de dato es Dialog
    return (dialog as LegacyDialog).id !== undefined;
}

// ejemplo de uso
function getDialog(dialog: LegacyDialog | Dialog) {
    if (isLegacyDialog(dialog)) {
        return dialog.dialog;
    } else {
        return (dialog as Dialog).dialog;
    }
}
