export function isNumber(a) {
    return /*typeof a == "number" &&*/ !isNaN(a);
}

export function isAlphaOrNum(char) {
    //check if ir's num or string
    return /^[A-Za-z0-9]$/.test(char);
}

export function isInputValid(char) {
    //if it a number or opeartor allow keybord action
    return /^[0-9+\-/*]$/.test(char);
}

export function isOperator(char) {
    return /^[+/*-]$/.test(char);
}