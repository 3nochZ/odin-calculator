import {add, subtract, multiply, divide, operate} from './operators.js';
import { isNumber, isAlphaOrNum, isInputValid, isOperator } from './checkers.js';
import { reduceArray, regexSeparator, operatorCounter, roundTo2f } from './simplify.js';

// console.log(add(1, 2));

//create UI
const body =  document.querySelector('body');
const calcContainer =  document.createElement('div');
calcContainer.classList.add("calcContainer");
body.appendChild(calcContainer);

//calcContainer
const buttons = 'C0123456789X+-*/.='
const array = [...buttons];

array.map(char => {
    let button = document.createElement('button');
    calcContainer.append(button);
    button.textContent = char
    button.classList.add(char);
})

//input field
const input = document.createElement('input');
input.classList.add('inputArea');
// input.style.order = "1";
calcContainer.prepend(input);
console.log(calcContainer);

let containerArr = []; //container for everything
let str = '';

function handleInput(text) {
     if (text == '='){
        if (containerArr.length === 0) throw new SyntaxError("No Input Detected!")
        str = input.value;
        containerArr = [str];
        const separatedArr = regexSeparator(containerArr);
        input.value = roundTo2f(operate(separatedArr[1], separatedArr[0], separatedArr[2]));
    }
    else if (text == 'C'){
        input.value = '';
        containerArr = [];
        str = '';
    }
    else if (text == 'X') {
        if (str == '') return
        const newValue = str.substring(0, str.length -1);
        str = newValue;
        input.value = newValue;
    }
    else {
        input.value += text;
        str += text;
        console.log(str);
        let count = operatorCounter([str]);
        if (count > 1) {
            containerArr = [str];
            const separatedArr = regexSeparator(containerArr);
            console.log(separatedArr);
            input.value = reduceArray(separatedArr)
            .filter(item => item !== ',')
            .join('')

            //reset count
            str = input.value;
            count  = operatorCounter([str]);
        }
    }
}

calcContainer.addEventListener('click', (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;

    const text = btn.textContent;
    handleInput(text);
});

calcContainer.addEventListener('keydown', (event) => {
    const allowed = /^[0-9=Cc+/*-\.]$/; //valid inputs
    // input.type = "text";
    // input.pattern = [0-9];
    if (allowed.test(event.key)){
        event.preventDefault();
        if (event.key.toLowerCase() == 'c'){
            handleInput('C');
        }
        else {
            handleInput(event.key);
        }
    }
    else if (event.key == 'Backspace'){
        // console.log("B");
        //logic
        handleInput('X');
    }
    else {
        event.preventDefault();
    }
})