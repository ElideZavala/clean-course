function formatInput(input: string) {
    return input.toUpperCase();
}

function getUserInput(): string | number {
    return "Hello World";
}

let input = getUserInput();

// Assert that input is a string
formatInput(input as string);

// This is equivalent to
formatInput(<string>input);

function addToList(list: string[], item: string) {
    return list.push(item);
}

addToList("this is really," as any, "really unsafe");
