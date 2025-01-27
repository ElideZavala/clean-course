function ask(): string | null {
    return prompt("When is your birthday?", "YYYY/MM/DD");
}

function parse(birthday: string): Date | null {
    let date = new Date(birthday);
    if (isValid(date)) {
        return null;
    }
    return date;
}

function isValid(date: Date) {
    return (
        Object.prototype.toString.call(date) === "[object Date]" &&
        !isNaN(date.getTime())
    );
}

let date = parse(ask()!);
console.log("date: ", date);
if (date) {
    console.info("Date is", date.toISOString());
} else {
    console.error("Error parsing date for some reason");
}
// if (birthday !== null) {
//     let date = parse(birthday);
//     console.log(date);
// } else {
//     console.error("Invalid birthday input");
// }
