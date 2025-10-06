import {add, subtract, multiply, divide, operate} from './operators.js';
import { isNumber, isAlphaOrNum, isInputValid, isOperator } from './checkers.js';
import { reduceArray, regexSeparator, operatorCounter } from './simplify.js';

console.log(add(1, 2));

//create UI
const body =  document.querySelector('body');
const calcContainer =  document.createElement('div');
calcContainer.classList.add("calcContainer");
body.appendChild(calcContainer);

//calcContainer
const buttons = 'C1234567890+-*/='
const array = [...buttons];

array.map(char => {
    let button = document.createElement('button');
    calcContainer.append(button);
    button.textContent = char
})

//input field
const input = document.createElement('input');
input.classList.add('inputArea');
// input.style.order = "1";
calcContainer.prepend(input);

let containerArr = []; //container for everything
let str = '';
const numContainer = [];
const operatorContainer = []

calcContainer.addEventListener('click', (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;

    const text = btn.textContent;
    
    if (text == '='){
        console.log('=');
        str = input.value;
        containerArr = [str];
        const separatedArr = regexSeparator(containerArr);
        input.value = operate(separatedArr[1], separatedArr[0], separatedArr[2]);
    }
    else if (text == 'C'){
        input.value = '';
        containerArr = [];
        str = '';
    }
    else {
        input.value += text;
        str += text;
        let count = operatorCounter([str]);
        if (count > 1) {
            containerArr = [str];
            const separatedArr = regexSeparator(containerArr);
            input.value = reduceArray(separatedArr)
            .filter(item => item !== ',')
            .join('')

            //reset count
            str = input.value;
            count  = operatorCounter([str]);
        }
        
        // reduceArray(separatedArr);
    }
})

//Mr. array function lol
// const equalBtn = document.querySelector('=');