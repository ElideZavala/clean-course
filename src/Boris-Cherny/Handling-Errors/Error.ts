type AppError = {
    message: string;
};

function throwError(message: string): never {
    throw new Error(message);
}

function handleErrors<T extends object>(result: T | AppError): T {
    if ("message" in result) {
        throwError(result.message);
    }
    return result;
}

function _x<T extends object>(): T {
    return handleErrors<T>({ message: "Error" });
}

function _y<T extends object>(): T {
    return handleErrors<T>({ message: "Error 2" });
}

function _z<T extends object>(): T {
    return handleErrors<T>({ message: "Error 3" });
}
