import { operate } from "./operators.js";

export function regexSeparator (arr) {
    return arr.flatMap(str => {
        return str.match(/\d+(\.\d+)?|[+/*-]/g).filter(Boolean)
    })
}

//takes separeted array as argument
export function reduceArray(arr) {
    const temp = [];
    if (arr.length > 3){
        let value = operate(arr[1], arr[0], arr[2]);
        temp.push(roundTo2f(value));
        arr.slice(3).map(item => temp.push(item));
    }
    return temp;
}

export const operatorCounter = (arr) => {
    return arr.reduce((count, str) => {
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