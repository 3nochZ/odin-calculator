import { isNumber } from "./checkers.js";

export function add(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Operate +: Invalid Types");
    }

    return a + b;    
}

export function subtract(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Operate -: Invalid Types");
    }

    return a - b;
}

export function multiply(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Operate *: Invalid Types");
    }

    return a * b;
}

export function divide(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Operate /: Invalid Types");
    }

    else if (b == 0) {
        throw new RangeError("Invalid: Divison by zero")
    }
    return a / b;
}

export function operate(operator, a, b) {
    switch(operator){
        case '+':
            return add(Number(a),Number(b));
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break
        default:
            throw new SyntaxError('Operate Fn: Invalid Operation');
    }

}