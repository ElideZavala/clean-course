// Custom error types
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function ask(): string | null {
    return prompt("When is your birthday?", "YYYY/MM/DD");
}

function parse(birthday: string): Date {
    let date = new Date(birthday);
    if (!isValid(date)) {
        throw new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
    }

    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError("Are you a timelord?");
    }
    return date;
}

try {
    let date = parse(ask() as string);
    console.log("Date is", date.toISOString());
} catch (e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
    } else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message);
    } else {
        throw e;
    }
}
