import { isNumber } from "./checkers.js";

export function add(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Invalid type");
    }

    return a + b;    
}

export function subtract(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Invalid type");
    }

    return a - b;
}

export function multiply(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Invalid type");
    }

    return a * b;
}

export function divide(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Invalid type");
    }

    else if (b == 0) {
        throw new RangeError("Invalid: Divison by zero")
    }
    return a / b;
}