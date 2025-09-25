import {add, subtract, multiply, divide} from './operators.js';

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

calcContainer.addEventListener('click', (event) => {
    // input.value = "aa"
    input.value += event.target.textContent;
    // console.log(event.target.value);
})