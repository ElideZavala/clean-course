function parse3(
    birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
    let date = new Date(birthday);
    if (!isValid(date)) {
        return new InvalidDateFormatError(
            "Enter a date in the form YYYY/MM/DD"
        );
    }

    if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError("Are you a timelord?");
    }

    return date;
}

let result = parse3(ask());

if (result instanceof InvalidDateFormatError) {
    console.error(result.message);
} else {
    console.log("Date is", result.toISOString());
}
