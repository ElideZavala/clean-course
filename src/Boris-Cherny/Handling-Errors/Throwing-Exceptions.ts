// Custom error types
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function ask2(): string | null {
    return prompt("When is your birthday?", "YYYY/MM/DD");
}

function isValid2(date: Date) {
    return (
        Object.prototype.toString.call(date) === "[object Date]" &&
        !isNaN(date.getTime())
    );
}

function parse2(birthday: string): Date {
    let date = new Date(birthday);
    if (!isValid2(date)) {
        throw new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
    }

    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError("Are you a timelord?");
    }
    return date;
}

try {
    let date = parse2(ask2() as string);
    console.log("Date is", date!.toISOString());
} catch (e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
    } else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message);
    } else {
        throw e;
    }
}
