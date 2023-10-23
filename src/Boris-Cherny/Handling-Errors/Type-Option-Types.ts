function ask4() {
    let result = prompt("When is your birthday?", "YYYY/MM/DD");
    if (result === null) {
        return [];
    }
    return [result];
}

function isValid4(date: Date) {
    return (
        Object.prototype.toString.call(date) === "[object Date]" &&
        !isNaN(date.getTime())
    );
}
function parse4(birthday: string): Date[] {
    let date = new Date(birthday);
    if (!isValid4(date)) {
        return [];
    }
    return [date];
}

let dateOne = parse4(ask4());
// lo que hacemos es con .map((_) => _.toISOString()) es que si es un array de Date, lo convierta a string y si es un array vacio, lo deje vacio, con .forEach lo que hacemos es que si es un array vacio, no haga nada y si es un array de Date, lo imprima
dateOne.map((_) => _.toISOString()).forEach((_) => console.log("Date is", _));
