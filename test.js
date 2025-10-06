import { operate } from "./operators.js";

const arr = ['123+564-khdjh/jdkf*jkb'];
const Tarr = ['123+564-345'];
let operators = ['+','-','*','/'];
// let newArr = arr.split('');
// console.log(newArr);
const magicThingy = (newArr) => {
    return newArr.flatMap((str) =>
        str.match(/\d+|[+/*-]/g).filter(Boolean)
    )
};

function reduceArr(arr) {
    const temp = [];
    if (arr.length > 3){
        let value = operate(arr[1], arr[0], arr[2]);
        temp.push(value);
        // let i = 3
        arr.slice(3).map(item => temp.push(item));
        // arr.reduce((init, curr, i) => {
        //     if (i > 2) {
        //         acc.push(item);
        //     }
        //     return acc
        // }, []);
    }
    return temp;
}
console.log(reduceArr(magicThingy(Tarr)));

const abcd = (a) => {
    let arr = magicThingy(a);
    // console.log(arr);
    return operate(arr[1], arr[0], arr[2]);
    // return arr.reduce((init, current) => {

    // }, 0)
}

// const operatorCounter = (arr) => {
//     let count = 0;
//     while (
//         arr.flatMap(str => {
//             if (str.match(/[+/*-]/)){
//             }
//         })) count++;
// }

const operatorCounter = (arr) => {
  return arr.reduce((count, str) => {
    // match all operators in the string
    const matches = str.match(/[+\-*/]/g);
    return count + (matches ? matches.length : 0);
  }, 0);
};

// Example
const aarr = ['123+', '564-khdjh/jdkf*jkb'];
console.log(operatorCounter(aarr)); // 3 ( +, -, * )

// console.log(magicThingy(arr));
// console.log(abcd(Tarr));
