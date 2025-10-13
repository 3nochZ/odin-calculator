import { checkConsOper, isNumber, isOperator } from "./checkers.js";
import { operate } from "./operators.js";

export function regexSeparator (arr) {
    const tokens = arr.flatMap(str => {
            return str.match(/\d+(\.\d+)?|[+/*-]/g).filter(Boolean)
    })

    const merged = [];
    //if current operator is preceded by an operator, treat as unary
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];

        if ((t == '-' || t == '+') &&

        (i === 0 || isOperator(tokens[i-1])) &&

        isNumber(tokens[i+1])){
            merged.push(t + tokens[i+1]);
            i++;
        }
        else {
            merged.push(t);
        }
    }
    return merged;
}

//takes separeted array as argument
export function reduceArray(arr) {
    const temp = [];
    if (arr.length >= 3){
        if (checkConsOper(arr)) {
            throw new SyntaxError("Invalid Syntax: Consecutive Operators");
        }
        let value = operate(arr[1], arr[0], arr[2]);
        temp.push(roundTo2f(value));
        arr.slice(3).map(item => temp.push(item));
    }
    return arr.length > 3 ? temp : arr;
}

export const operatorCounter = (arr) => {
    return arr.reduce((count, str, i)  => {
        // if (isOperator(arr[i]) && isOperator(arr[i+1])) {
        //     throw new SyntaxError("Invalid Syntax: Consecutive Operators")
        // }
        const matches = str.match(/[+\-/*]/g);
        return count + (matches ? matches.length : 0)
    }, 0);
}

export function roundTo2f(num) {
    if (Number(num) === num && num % 1 !== 0){
        return Number(num.toFixed(2));
    }
    else {
        return num;
    }
}

// export function operatorCounter(arr) {
//     return arr.reduce((count, s) => {
//         let prevIsOp = false;
//         let i = 0;
//         while (i )
//     })
// }